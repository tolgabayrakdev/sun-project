from sqlalchemy.exc import SQLAlchemyError
from fastapi import HTTPException
from app.schema.subscription_schema import CreateSubscription
from ..model import Subscription
from ..database import SessionLocal

db = SessionLocal()


class SubscriptionService:

    @classmethod
    def create(cls, payload: CreateSubscription):
        try:
            subscription = Subscription(
                user_id=payload.user_id,
                plan_id=payload.plan_id,
                status=payload.status,
                start_date=payload.start_date,
                end_date=payload.end_date
            )
            db.add(subscription)
            db.commit()
            return subscription
        except SQLAlchemyError as e:
            db.rollback()
            raise HTTPException(status_code=500, detail=str(e))

    @classmethod
    def delete(cls, id: int):
        try:
            subscription = db.query(Subscription).filter_by(id=id).first()
            db.delete(subscription)
            db.commit()
        except SQLAlchemyError as e:
            raise HTTPException(status_code=500, detail=str(e))
