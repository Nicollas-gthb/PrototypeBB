from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from jose import JWTError, jwt

from app.core.security import criptografar, verificar_senha, criar_access_token, criar_refresh_token
from app.core.database import get_session
from app.core.security import SECRET_KEY, ALGORITHM
from app.schemas.schema import UsuarioCreate, UsuarioResponse, LoginSchema, TokenSchema
from app.models.model import Usuario

auth_router = APIRouter(prefix="/auth", tags=["authentication"])

@auth_router.post("/create", response_model=UsuarioResponse)
async def criar_usuario(
        dados: UsuarioCreate, 
        session: Session = Depends(get_session)
    ):

    #confere se o email ja está cadastrado
    usuario_existente = session.query(Usuario).filter(Usuario.email == dados.email).first()

    if usuario_existente:
        raise HTTPException(status_code=400, detail="Email ja cadastrado")
    
    #criptografa a senha
    senha_hash = criptografar(dados.senha)

    novo_usuario = Usuario(
        nome = dados.nome,
        email = dados.email,
        senha = senha_hash,
        estado = dados.estado,
        admin = dados.admin
    )

    session.add(novo_usuario)
    session.commit()
    session.refresh(novo_usuario)

    return novo_usuario


@auth_router.post("/login", response_model=TokenSchema)
async def login(
        dados: LoginSchema, 
        session: Session = Depends(get_session)
    ):

    #confere se o email ja está cadastrado
    usuario_existente = session.query(Usuario).filter(Usuario.email == dados.email).first()

    if not usuario_existente:
        raise HTTPException(status_code=401, detail="Email não encontrado")
    
    #confere se a senha bate
    if not verificar_senha(dados.senha, usuario_existente.senha):
        raise HTTPException(status_code=401, detail="Senha não corresponde com o email")
    
    #token de 72h
    access_token = criar_access_token(usuario_existente.id)
    #token de 30d
    refresh_token = criar_refresh_token(usuario_existente.id)
    
    return {
        "access_token": access_token,
        "refresh_token": refresh_token
    }


@auth_router.post("/refresh", response_model=TokenSchema)
async def refresh_token(refresh_token: str):

    try:
        payload = jwt.decode(refresh_token, SECRET_KEY, algorithms=[ALGORITHM])
        user_id = (payload.get("sub"))
    except JWTError:
        raise HTTPException(status_code=401, detail="Token refresh inválido")
    
    new_access_token = criar_access_token(user_id)
    new_refresh_token = criar_refresh_token(user_id)

    return {
        "access_token": new_access_token,
        "refresh_token": new_refresh_token,
        "token_type": "bearer"
    }