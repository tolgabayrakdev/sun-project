from fastapi import APIRouter, HTTPException, Depends
from app.schema.payment_schema import Payment
from app.schema.invoice_schema import CreateInvoice
from app.schema.plan_schema import Plan
from app.service.payment_service import PaymentService
from app.depend.auth_user import auth_user
from ..model import User
from typing import Annotated

payment_router = APIRouter()


@payment_router.post("/")
def make_payment(
        auth_user: Annotated[User, Depends(auth_user)],
        invoice_payload: CreateInvoice,
        payment: Payment,
        plan: Plan
):
    payment = PaymentService.process_payment(plan=plan, invoice_payload=invoice_payload, payment=payment, user_id=auth_user.id)
    if payment:
        return {"message": "Payment transaction has completed successfully."}
    else:
        raise HTTPException(status_code=400, detail="Payment transaction failed!")

