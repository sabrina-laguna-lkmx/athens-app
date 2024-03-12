import { PrismaClient } from "@prisma/client";
import { randomUUID } from "crypto";

const prisma = new PrismaClient();

export async function findById(userId) {
  const user = await prisma.user.findFirst({
    where: {
      user_id: userId,
    },
  });

  return user;
}

export async function findByEmail(email) {
  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  return user;
}

export async function create({ email, salt, hash }) {
  const user = await prisma.user.create({
    data: {
      user_id: randomUUID().toString(),
      email,
      salt,
      hash,
      created_at: new Date(),
      update_at: new Date(),
      isActive: false
    },
  });

  return user;
}

export async function updateEmail(userId, email) {
  const user = await prisma.user.update({
    where: {
      user_id: userId,
    },
    data: {
      email,
    },
  });

  return user;
}

export async function updatePassword(userId, newPasswordHash, newPasswordSalt) {
  const user = await prisma.user.update({
    where: {
      user_id: userId,
    },
    data: {
      hash: newPasswordHash,
      salt: newPasswordSalt,
    },
  });

  return user;
}

export async function activeUser(user_id) {
  await prisma.user.update({
    where: {
      user_id: user_id
    },
    data: {
      isActive: true,
      update_at: new Date()
    }
  })
}
