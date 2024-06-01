from fastapi import FastAPI
from .database import engine
from . import model
from fastapi.middleware.cors import CORSMiddleware
from app.controller import auth_controller, subscription_controller

model.Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = ["http://localhost:5173", "https://localhost:5173"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def main():
    return {"Hello": "World"}


app.include_router(router=auth_controller.auth_router, prefix="/api/v1/auth")
app.include_router(router=subscription_controller.subscription_router, prefix="/api/v1/subscription")
