from sqlalchemy import Column, Integer, String
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()
class User(Base):
   __tablename__ = 'users' 

def connect():
    engine = create_engine('postgresql://postgres@localhost', echo=True)
    Base.metadata.create_all(engine)
