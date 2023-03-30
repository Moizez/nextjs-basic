import NextAuth from "next-auth/next";
import { TAuth } from "./TAuth";

declare module "next-auth" {
  interface Session {
    user: TAuth;
  }
}
