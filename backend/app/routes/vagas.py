from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session

from app.core.database import get_session
from app.core.security import get_usuario_admin
from app.schemas.schema import VagaResponse, VagaCreate
from app.models.model import Usuario, Vaga

vagas_router = APIRouter(prefix="/vagas", tags=["vagas"])

@vagas_router.post("/create", response_model=VagaResponse)
async def criar_vaga(
        dados: VagaCreate,
        session: Session = Depends(get_session),
        admin: Usuario = Depends(get_usuario_admin)
    ):

    nova_vaga = Vaga(
        area = dados.area,
        cargo = dados.cargo,
        jornada = dados.jornada,
        tipo = dados.tipo,
        data_inicio = dados.data_inicio,
        salario = dados.salario,
        local = dados.local,
        requisitos = dados.requisitos
    )

    session.add(nova_vaga)
    session.commit()
    session.refresh(nova_vaga)

    return nova_vaga