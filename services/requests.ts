import prisma from "../libs/prisma";

export default {
  getUsersPerPage: async (page: number, limit: number = 3) => {
    let skip = 0;

    if (page) {
      skip = (page - 1) * limit;
    }

    const count = await prisma.user.count();

    const user = await prisma.user.findMany({
      skip,
      take: limit,

      where: {
        active: true,
        age: {
          gte: 18,
        },
      },
      select: {
        id: true,
        name: true,
        email: true,
        active: true,
      },
      orderBy: {
        id: "asc",
      },
    });

    const data = {
      data: user,
      info: {
        count,
        status: true,
        lastPage: count - skip <= limit,
      },
    };

    return data;
  },

  addUser: async (
    name: string,
    email: string,
    active?: boolean,
    role?: "USER" | "ADMIN"
  ) => {
    return await prisma.user.create({
      data: { name, email, active, role },
    });
  },
  getUserById: async (id: number) => {
    return await prisma.user.findUnique({ where: { id } });
  },
  getUserByEmail: async (email: string) => {
    return await prisma.user.findFirst({ where: { email, active: true } });
  },
  updateUser: async (id: number, name?: string, active?: string) => {
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

    return await prisma.user.update({
      where: { id },
      data,
    });
  },
  deleteUserById: async (id: number) => {
    return await prisma.user.delete({ where: { id } });
  },
};
