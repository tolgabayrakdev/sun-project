import datetime

from app.schema.invoice_schema import CreateInvoice
from app.schema.payment_schema import Payment
from app.schema.plan_schema import Plan
from sqlalchemy.exc import SQLAlchemyError
from fastapi import HTTPException
from ..database import SessionLocal
from ..model import Invoice, Subscription
from datetime import datetime, timedelta

db = SessionLocal()


class PaymentService:

    @classmethod
    def process_payment(cls, plan: Plan, invoice_payload: CreateInvoice, payment: Payment, user_id: int):
        try:
            amount = plan.price
            invoice = Invoice(
                user_id=user_id,
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

            start_date = datetime.now()
            end_date = start_date + timedelta(days=plan.duration)
            subscription = Subscription(
                user_id=user_id,
                plan_id=plan.id,
                status="active",
                start_date=start_date,
                end_date=end_date
            )
            db.add(subscription)
            db.commit()
            db.refresh(subscription)

            # Faturayı güncelleme (subscription_id ekleme)
            invoice.subscription_id = subscription.id
            db.commit()
            db.refresh(invoice)

            return {
                "invoice": invoice,
                "payment": payment,
                "subscription": subscription
            }
        except SQLAlchemyError as e:
            raise HTTPException(status_code=500, detail=str(e))
