from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session, joinedload

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

@vagas_router.get("/dashboard")
async def listar_vagas(session: Session = Depends(get_session)):
    
    vagas = session.query(Vaga).all()

    vagas_formatadas = []

    for vaga in vagas:
        vagas_formatadas.append({
            "id": vaga.id,
            "area": vaga.area,
            "cargo": vaga.cargo,
            "jornada": vaga.jornada,
            "tipo": vaga.tipo,
            "data_inicio": vaga.data_inicio,
            "salario": vaga.salario,
            "local": vaga.local,
            "status": vaga.status,
            "requisitos": vaga.requisitos,
            "total_candidatos": len(vaga.candidaturas)
        })

    return vagas_formatadas

@vagas_router.get("/{vaga_id}/candidatos")
async def listar_candidatos_vaga(vaga_id: int, session: Session = Depends(get_session)):

    vaga = session.query(Vaga).filter(Vaga.id == vaga_id).first()

    if not vaga:
        raise HTTPException(status_code=404, detail="Vaga não encontrada")
    
    vaga_formatada = {
        "cargo": vaga.cargo,
        "tipo": vaga.tipo,
        "local": vaga.local, 
        "status": vaga.status
    }

    candidatos = []

    for candidatura in vaga.candidaturas:
        candidatos.append({
            "id": candidatura.candidato.id,
            "nome": candidatura.candidato.usuario.nome,
            "estado": candidatura.candidato.usuario.estado,
            "status": candidatura.status,
            "afinidade": candidatura.afinidade
        })

    return {
        "vaga": vaga_formatada,
        "candidatos": candidatos
    }
