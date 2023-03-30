import { TUser } from "./TUser";

export type TAuth = TUser & {
  role: string;
};
