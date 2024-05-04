from pydantic import BaseModel, Field


class LoginUser(BaseModel):
    email: str
    password: str


class RegisterUser(BaseModel):
    username: str = Field(max_length=10)
    email: str
    password: str
