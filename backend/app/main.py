from fastapi import FastAPI

from app.core.database import engine, Base
from backend.app.models.model import Usuario

app = FastAPI()

#Cria as tabelas no banco de dados
Base.metadata.create_all(bind=engine)

@app.get("/")
def root():
    return {
        "mensagem": "Hello World!",
        "status": "Docker rodando: FastAPI"
    }

