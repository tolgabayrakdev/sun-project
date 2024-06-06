from pydantic import BaseModel
from decimal import Decimal
from datetime import datetime


class Payment(BaseModel):
    invoice_id: int
    amount: Decimal
    payment_method: str
    payment_date: datetime
