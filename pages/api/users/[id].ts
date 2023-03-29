import { NextApiHandler } from "next";
import prisma from "../../../libs/prisma";

const handler: NextApiHandler = async (req, res) => {
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

export default handler;
