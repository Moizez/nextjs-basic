import { NextApiHandler } from "next";
import prisma from "../../../libs/prisma";
import requests from "../../../services/requests";

const handlerGet: NextApiHandler = async (req, res) => {
  const { page } = req.query;
  const users = await requests.getUsersPerPage(parseInt(page as string));
  res.json({ status: true, users });
};

const handlerPost: NextApiHandler = async (req, res) => {
  const { name, email, active, role } = req.body;

  const user = await requests.addUser(name, email, active, role).catch(() => {
    res.json({ error: "Usuário já existe!" });
  });

  if (user) res.status(201).json({ status: true, user});
};

const handler: NextApiHandler = (req, res) => {
  switch (req.method) {
    case "GET":
      handlerGet(req, res);
      break;

    case "POST":
      handlerPost(req, res);
      break;

    default:
      break;
  }
};

export default handler;
