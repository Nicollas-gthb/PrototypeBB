from passlib.context import CryptContext
from jose import JWTError, jwt
from datetime import datetime, timedelta, timezone

from dotenv import load_dotenv
import os


load_dotenv()

SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = os.getenv("ALGORITHM")
ACCESS_TOKEN_EXPIRE_HOURS = os.getenv("ACCESS_TOKEN_EXPIRE_HOURS")
REFRESH_TOKEN_EXPIRE_DAYS = os.getenv("REFRESH_TOKEN_EXPIRE_DAYS")

#variavel para criptografar
bcrypt_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash_senha(senha: str) -> str:
    return bcrypt_context.hash(senha)

def verificar_senha(senha: str, senha_hash: str) -> bool:
    return bcrypt_context.verify(senha, senha_hash)


#token
def criar_access_token(id_usuario):

    data_expiracao = datetime.now(timezone.utc) + timedelta(hours=ACCESS_TOKEN_EXPIRE_HOURS)
    dictionary_info = {
        "sub": str(id_usuario),
        "exp": data_expiracao,
        "type": "access"
    }
    jwt_code = jwt.encode(dictionary_info, SECRET_KEY, algorithm=ALGORITHM)
    return jwt_code


def criar_refresh_token(id_usuario):

    data_expiracao = datetime.now(timezone.utc) + timedelta(days=REFRESH_TOKEN_EXPIRE_DAYS)
    dictionary_info = {
        "sub": str(id_usuario),
        "exp": data_expiracao,
        "type": "refresh"
    }
    jwt_code = jwt.encode(dictionary_info, SECRET_KEY, algorithm=ALGORITHM)
    return jwt_code

