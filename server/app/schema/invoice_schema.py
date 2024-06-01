from pydantic import BaseModel
from decimal import Decimal
import datetime


class CreateInvoice(BaseModel):
    user_id: int
    subscription_id: int
    price: Decimal
    status: str
    issue_date: datetime
    due_date: datetime
