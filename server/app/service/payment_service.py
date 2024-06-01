from app.schema.invoice_schema import CreateInvoice
from app.schema.payment_schema import Payment
from app.schema.plan_schema import Plan
from sqlalchemy.exc import SQLAlchemyError
from fastapi import HTTPException
from ..database import SessionLocal

db = SessionLocal()
class PaymentService:

    @classmethod
    def process_payment(cls, plan: Plan, invoice_payload: CreateInvoice, payment: Payment):
        try:
            amount = plan.price
        except SQLAlchemyError as e:
            raise HTTPException(status_code=500, detail=str(e))

