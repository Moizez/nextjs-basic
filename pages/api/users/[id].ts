import { NextApiHandler } from "next";
import prisma from "../../../libs/prisma";
import requests from "../../../services/requests";

const handlerGet: NextApiHandler = async (req, res) => {
  const { id } = req?.query;

  const user = await requests.getUserById(parseInt(id as string)).catch((e) => {
    console.log("ERROR: ", e);
    res.status(404).json({ error: "Usuário não encontrado!" });
  });

  if (user) res.json({ status: true, user });
};

const handlerPut: NextApiHandler = async (req, res) => {
  const { id } = req?.query;
  const { name, active } = req?.body;

  const user = await requests.updateUser(Number(id), name, active);

  if (user) {
    res.json({ status: true, user });
    return;
  }

  res.status(404).json({ error: "Não foi possível alterar este usuário!" });
};

const handlerDelete: NextApiHandler = async (req, res) => {
  const { id } = req?.query;

  const user = await requests.deleteUserById(Number(id)).catch(() => {
    res.json({ error: "Usuário não encontrado!" });
  });

  if (user) res.json({ status: true });
};

const handler: NextApiHandler = async (req, res) => {
  switch (req.method) {
    case "GET":
      handlerGet(req, res);
      break;

    case "PUT":
      handlerPut(req, res);
      break;

    case "DELETE":
      handlerDelete(req, res);
      break;

    default:
      break;
  }
};

export default handler;
