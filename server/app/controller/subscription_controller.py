from fastapi import APIRouter, Response, Request, HTTPException
from app.schema.subscription_schema import CreateSubscription
from app.service.subscription_service import SubscriptionService

subscription_router = APIRouter()


@subscription_router.post("/", status_code=201)
async def create_subscription(subscription: CreateSubscription):
    new_subscription = SubscriptionService.create(payload=subscription)
    if new_subscription:
        return {"message": "Subscription has been created."}
    else:
        raise HTTPException(status_code=400, detail="User not created!")


