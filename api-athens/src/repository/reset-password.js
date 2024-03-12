import { PrismaClient } from "@prisma/client";
import { randomUUID } from "crypto";

const prisma = new PrismaClient();

export async function createToken(token, user, createdAt) {
  const new_token = await prisma.token_Reset_Password.create({
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
  const token_pass = await prisma.token_Reset_Password.findFirst({
    where: {
      userId: userId,
      token: token
    }
  });

  return token_pass;
}

export async function deleteTokenByUserId(tokenId){
  await prisma.token_Reset_Password.delete({
    where: {
      id: tokenId,
    },
  });
}

