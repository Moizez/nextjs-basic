import { NextApiHandler } from "next";
import { Users } from "../../../constants/usersData";

const handler: NextApiHandler = (req, res) => {
  res.json(Users);
};

export default handler;
