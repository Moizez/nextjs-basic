import { NextApiHandler } from "next";
import prisma from "../../../libs/prisma";

const handlerGet: NextApiHandler = async (req, res) => {
  const { id } = req?.query;

  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(id as string),
    },
  });

  if (user) {
    res.json({ status: true, user });
    return;
  }

  res.status(404).json({ error: "Usuário não encontrado!" });
};

const handlerPut: NextApiHandler = async (req, res) => {
  const { id } = req?.query;
  const { name, active } = req?.body;

  const data: {
    name?: string;
    active?: boolean;
  } = {};

  if (name) data.name = name;
  if (active)
    switch (active) {
      case "true":
      case "1":
        data.active = true;
        break;

      case "false":
      case "0":
        data.active = false;
        break;

      default:
        break;
    }

  const user = await prisma.user.update({
    where: { id: parseInt(id as string) },
    data,
  });

  if (user) {
    res.json({ status: true, user });
    return;
  }

  res.status(404).json({ error: "Não foi possível alterar este usuário!" });
};

const handlerDelete: NextApiHandler = async (req, res) => {
  const { id } = req?.query;

  const user = await prisma.user
    .delete({
      where: {
        id: parseInt(id as string),
      },
    })
    .catch(() => {
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
