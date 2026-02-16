from pydantic import BaseModel
from datetime import date

class UsuarioSchema(BaseModel):
    nome: str
    email: str
    senha: str
    estado: str
    admin: bool = False

    class Config:
        from_attributes = True

class CandidatoSchema(BaseModel):
    id_usuario: int
    cargo_atual: str
    area_atual: str
    
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

    class Config:
        from_attributes = True

class GerenciadorSchema(BaseModel):
    id_vaga: int
    id_candidato: int

    class Config:
        from_attributes = True

class LoginSchema(BaseModel):
    email: str
    senha: str

    class Config:
        from_attributes = True