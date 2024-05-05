from fastapi import APIRouter
from fastapi import Response, HTTPException, Request
from app.schema.auth_schema import LoginUser, RegisterUser
from app.service.auth_service import AuthService


auth_router = APIRouter()


@auth_router.post("/login")
async def login(user: LoginUser, response: Response) -> dict[str, str]:
    result = AuthService.login(user.email, user.password)
    if result:
        response.set_cookie(
            key="access_token", value=result["access_token"], httponly=True
        )
        response.set_cookie(
            key="refresh_token", value=result["refresh_token"], httponly=True
        )
        return {"message": "Login is successful."}
    else:
        raise HTTPException(status_code=500, detail="Server error!")


@auth_router.post("/register", status_code=201)
async def register(user: RegisterUser):
    user = AuthService.register(payload=user)
    if user:
        return {"message": "User has been created."}


@auth_router.post("/logout")
async def logout(response: Response) -> dict[str, str]:
    response.delete_cookie("access_token")
    response.delete_cookie("refresh_token")
    return {"message": "you are logged out."}
