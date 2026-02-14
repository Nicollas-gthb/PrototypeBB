from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    POSTGRES_USER: str
    POSTGRES_PASSWORD: str
    POSTGRES_DB: str
    DB_HOST: str
    DB_PORT: str

    class config:
        env_file = ".env"

settings = Settings()