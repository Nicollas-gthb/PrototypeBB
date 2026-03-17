from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.schemas.schema import UsuarioResponse, CandidatoResponse, CandidatoCreate
from app.core.database import get_session
from app.models.model import Usuario, Candidato

user_router = APIRouter(prefix="/user", tags=["usuarios"])

@user_router.get("/{user_id}/info", response_model=UsuarioResponse)
async def get_info(user_id: int, session: Session = Depends(get_session)):

    user_existente = session.query(Usuario).filter(Usuario.id == user_id).first()

    if not user_existente:
        raise HTTPException(status_code=404, detail="Usuario não encontrado")
    
    return user_existente

@user_router.post("/{user_id}/create_candidato", response_model=CandidatoResponse)
async def criar_candidato(
    user_id: int,
    payload: CandidatoCreate, 
    session: Session = Depends(get_session)
):
    
    user_existente = session.query(Usuario).filter(Usuario.id == user_id).first()

    if not user_existente:
        raise HTTPException(status_code=404, detail="Usuario não encontrado")
    

    novo_candidato = Candidato(
        id_usuario = user_id,
        cargo_atual = payload.cargo_atual,
        area_atual = payload.area_atual,
        conhecimentos = payload.conhecimentos
    )
    
    session.add(novo_candidato)
    session.commit()
    session.refresh(novo_candidato)
    
    

@user_router.get("/{user_id}/candidato", response_model=CandidatoResponse)
async def get_candidato(user_id: int, session: Session = Depends(get_session)):

    perfil_candidato = session.query(Candidato).filter(Candidato.id_usuario == user_id).first()

    if not perfil_candidato:
        raise HTTPException(status_code=404, detail="Perfil de candidato não encontrado")
    
    return perfil_candidato