from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware



app = FastAPI()

@app.get("/")
async def init():
    return {
        "sucess": True,
        "mensagem": "Hello World!",
        "status": "Docker rodando: FastAPI"
    }

from app.routes.auth import auth_router
from app.routes.vagas import vagas_router
from app.routes.user import user_router

app.include_router(auth_router)
app.include_router(vagas_router)
app.include_router(user_router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)