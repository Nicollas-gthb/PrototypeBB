from core.database import Base
from sqlalchemy import Column, String, Integer, Float, Boolean, ForeignKey, Date
from sqlalchemy.orm import relationship


#Aqui as classes viram as tabelas

class Usuario(Base):

    #nome da tabela
    __tablename__ = "usuarios"

    #atributos
    id = Column(Integer, primary_key=True, autoincrement=True, index=True)
    nome = Column(String, nullable=False)
    email = Column(String, unique=True, nullable=False, index=True)
    senha = Column(String, nullable=False)
    estado = Column(String, nullable=False)
    admin = Column(Boolean, default=False)

    perfil_candidato = relationship("Candidato", back_populates="usuario", uselist=False)
    
class Candidato(Base):
    __tablename__ = "candidatos"

    id = Column(Integer, primary_key=True, autoincrement=True, index=True)
    id_usuario = Column(Integer, ForeignKey("usuarios.id"), unique=True)
    cargo_atual = Column(String, nullable=False)
    area_atual = Column(String, nullable=False)
    conhecimentos = Column(String)

    usuario = relationship("Usuario", back_populates="perfil_candidato")
    vagas_aplicadas = relationship("Candidatura", back_populates="candidato")

class Vaga(Base):
    __tablename__ = "vagas"

    id = Column(Integer, primary_key=True, autoincrement=True, index=True)
    area = Column(String, nullable=False)
    cargo = Column(String, nullable=False)
    jornada = Column(Integer, nullable=False)
    tipo = Column(String, nullable=False)
    data_inicio = Column(Date, nullable=False)
    salario = Column(Float, nullable=False)
    local = Column(String, nullable=False)
    status = Column(String, default="ABERTA") #ABERTA ou ENCERRADA
    requisitos = Column(String)

    candidaturas = relationship("Candidatura", back_populates="vaga")


class Candidatura(Base):
    __tablename__ = "candidatura"

    id = Column(Integer, primary_key=True, autoincrement=True, index=True)
    id_vaga = Column(Integer, ForeignKey("vagas.id"))
    id_candidato = Column(Integer, ForeignKey("candidato.id"))
    afinidade = Column(Integer)
    status = Column(String, default="PENDENTE") #PENDENTE ou CONTRATADO ou REJEITADO

    vaga = relationship("Vaga", back_populates="candidaturas")
    candidato = relationship("Candidato", back_populates="vagas_aplicadas")