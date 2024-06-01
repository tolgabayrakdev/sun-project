import datetime

from app.schema.invoice_schema import CreateInvoice
from app.schema.payment_schema import Payment
from app.schema.plan_schema import Plan
from sqlalchemy.exc import SQLAlchemyError
from fastapi import HTTPException
from ..database import SessionLocal
from ..model import Invoice, Subscription
from datetime import datetime

db = SessionLocal()


class PaymentService:

    @classmethod
    def process_payment(cls, plan: Plan, invoice_payload: CreateInvoice, payment: Payment):
        try:
            subscription_check = db.query(Subscription).filter(
                Subscription.id == invoice_payload.subscription_id).first()
            if not subscription_check:
                raise HTTPException(status_code=404, detail="Subscription not found!")

            amount = plan.price
            invoice = Invoice(
                user_id=invoice_payload.user_id,
                subscription_id=invoice_payload.subscription_id,
                price=amount,
                status="paid",
                issue_date=datetime.now()
            )
            db.add(invoice)
            db.commit()
            db.refresh(invoice)

            payment = Payment(
                invoice_id=invoice.id,
                amount=amount,
                payment_method=payment.payment_method,
                payment_date=datetime.now()
            )
            db.add(payment)
            db.commit()
            db.refresh(payment)
            return invoice
        except SQLAlchemyError as e:
            raise HTTPException(status_code=500, detail=str(e))
