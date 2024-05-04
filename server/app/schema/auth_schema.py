from pydantic import BaseModel, Field


class LoginUser(BaseModel):
    email: str
    password: str


class RegisterUser(BaseModel):
    email: str
    password: str
