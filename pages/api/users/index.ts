import { NextApiHandler } from "next";
import prisma from "../../../libs/prisma";

const handlerGet: NextApiHandler = async (req, res) => {
  const users = await prisma.user.findMany({
    where: {
      role: "ADMIN",
    },
  });

  res.json({ status: true, users });
};

const handlerPost: NextApiHandler = async (req, res) => {
  const { name, email, active, role } = req.body;

  const newUser = await prisma.user.create({
    data: { name, email, active, role },
  });

  res.status(201).json({ status: true, user: newUser });
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
