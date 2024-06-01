from fastapi import APIRouter, HTTPException
from app.schema.payment_schema import Payment
from app.schema.invoice_schema import CreateInvoice
from app.service.payment_service import PaymentService


payment_router = APIRouter()


@payment_router.post("/")
def make_payment():
    payment = PaymentService.process_payment(invoice_payload=CreateInvoice, payment=Payment)
    if payment:
        return {"message": "Payment transaction has completed successfully."}
    else:
        raise HTTPException(status_code=400, detail="Payment transaction failed!")

