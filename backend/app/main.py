from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.database import engine, Base


app = FastAPI()

@app.get("/")
async def init():
    return {
        "sucess": True,
        "mensagem": "Hello World!",
        "status": "Docker rodando: FastAPI"
    }

from app.routes.auth import auth_router

app.include_router(auth_router)