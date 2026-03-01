from pydantic import BaseModel
from typing import Optional
from datetime import date

class UsuarioSchema(BaseModel):
    nome: str
    email: str
    estado: str
    admin: bool = False

class UsuarioCreate(UsuarioSchema):
    senha: str

class UsuarioResponse(UsuarioSchema):
    id: int

    class Config:
        from_attributes = True

class UsuarioResponseFront(BaseModel):
    username: str
    admin: bool


class CandidatoSchema(BaseModel):
    cargo_atual: str
    area_atual: str
    conhecimentos: Optional[str] = None
    
class CandidatoCreate(CandidatoSchema):
    id_usuario: int

class CandidatoResponse(CandidatoSchema):
    id: int
    usuario: UsuarioResponse

    class Config:
        from_attributes = True



class VagaSchema(BaseModel):
    area: str
    cargo: str
    jornada: int
    tipo: str
    data_inicio: date
    salario: float
    local: str
    status: Optional[str] = "ABERTA"
    requisitos: Optional[str] = None

class VagaCreate(VagaSchema):
    pass

class VagaResponse(VagaSchema):
    id: int

    class Config:
        from_attributes = True




class CandidaturaSchema(BaseModel):
    afinidade: Optional[int] = None
    status: Optional[str] = "PENDENTE"

class CandidaturaCreate(CandidaturaSchema):
    id_vaga: int
    id_candidato: int

class CandidaturaResponse(CandidaturaSchema):
    id: int
    vaga: VagaResponse
    candidato: CandidatoResponse
    
    class Config:
        from_attributes = True



class LoginSchema(BaseModel):
    email: str
    senha: str

    class Config:
        from_attributes = True

class TokenSchema(BaseModel):
    access_token: str
    refresh_token: str
    token_type: str = "bearer"
    user: UsuarioResponseFront

    class Config:
        from_attributes = True