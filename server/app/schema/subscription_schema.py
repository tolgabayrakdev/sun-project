from pydantic import BaseModel
import datetime


class CreateSubscription(BaseModel):
    status: str
    plan_id: int
    user_id: int
    start_date: datetime
    end_date: datetime
