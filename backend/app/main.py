from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.database import engine, Base


app = FastAPI()

#Cria as tabelas no banco de dados
Base.metadata.create_all(bind=engine)

@app.get("/")
def root():
    return {
        "sucess": True,
        "mensagem": "Hello World!",
        "status": "Docker rodando: FastAPI"
    }

from routes.auth import auth_router

app.include_router(auth_router)