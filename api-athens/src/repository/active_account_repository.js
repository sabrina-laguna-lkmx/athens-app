import { PrismaClient } from "@prisma/client";
import { randomUUID } from "crypto";

const prisma = new PrismaClient();

export async function createToken(token, user, createdAt) {
  const new_token = await prisma.token_active_account.create({
    data: {
      id: randomUUID().toString(),
      token: token,
      created_at: new Date(createdAt),
      userId: user.user_id,
    },
  });

  return new_token;
}

export async function findTokenByUserIdAndToken(userId, token) {
  const token_pass = await prisma.token_active_account.findFirst({
    where: {
      userId: userId,
      token: token,
    },
  });

  return token_pass;
}

export async function deleteTokenById(id) {
  await prisma.token_active_account.delete({
    where: {
      id: id
    }
  })
}
