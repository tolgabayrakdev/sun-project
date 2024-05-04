from fastapi import FastAPI
from .database import engine
from . import model
from fastapi.middleware.cors import CORSMiddleware

model.Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = ["http://localhost:3000", "https://localhost:3000"]

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
