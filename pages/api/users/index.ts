import { NextApiHandler } from "next";
import prisma from "../../../libs/prisma";

const handlerGet: NextApiHandler = async (req, res) => {
  const { page, limit } = req.query;

  let perPage = 3;
  let skip = 0;

  if (page) {
    skip = (parseInt(page as string) - 1) * perPage;
  }

  const users = await prisma.user.findMany({
    skip,
    take: perPage,

    where: {
      active: true,
      age: {
        gte: 18,
      },
    },
    select: {
      id: true,
      name: true,
      email: false,
      active: true,
    },
    orderBy: {
      id: "asc",
    },
  });

  res.json({ status: true, users });
};

const handlerPost: NextApiHandler = async (req, res) => {
  const { name, email, active, role } = req.body;

  const newUser = await prisma.user
    .create({
      data: { name, email, active, role },
    })
    .catch((e) => {
      console.log("ERROR: ", e);

      res.json({ error: "Usuário não criado!" });
    });

  if (newUser) res.status(201).json({ status: true, user: newUser });
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
