from pydantic import BaseModel
from decimal import Decimal


class Plan(BaseModel):
    name: str
    description: str
    price: Decimal
    duration: int
