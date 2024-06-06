from pydantic import BaseModel
from decimal import Decimal
from datetime import datetime


class CreateInvoice(BaseModel):
    subscription_id: int
    price: Decimal
    status: str
    issue_date: datetime
    due_date: datetime
