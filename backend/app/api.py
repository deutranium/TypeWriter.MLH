from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from faunadb import query as q
from faunadb.objects import Ref
from faunadb.client import FaunaClient
import random
import sys, os.path
from . import config


client = FaunaClient(secret=config.api_key)
app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.get("/", tags=["root"])
async def read_root() -> dict:
    return {"message": "Welcome to your API"}

@app.get("/get_snippet")
async def read_get_snippet() -> dict:
    result = client.query(
        q.map_(
            lambda x: q.get(x),
            q.paginate(
                q.match(q.index("all_snippets"))
            )
        )
    )

    result = result['data']
    obj = result[random.randint(0, len(result) - 1)]
    return obj['data']