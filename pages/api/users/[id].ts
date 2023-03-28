import { NextApiHandler } from "next";
import { Users } from "../../../constants/usersData";

const handler: NextApiHandler = (req, res) => {
  const { id } = req?.query;
  for (let i in Users) {
    if (String(Users[i].id) === id) {
      res.json(Users[i]);
      return;
    }
  }

  res.status(404).json({ error: "Usuário não encontrado!" });
};

export default handler;
