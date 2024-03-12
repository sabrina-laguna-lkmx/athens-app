import { PrismaClient } from "@prisma/client";
import { randomUUID } from "crypto";

const prisma = new PrismaClient();

export async function findByUserId(userId) {
  const paymentMethods = await prisma.paymentMethod.findMany({
    where: {
      user_id: userId,
    },
  });

  return paymentMethods;
}

export async function createPaymentMethod({
  user_id,
  accountType,
  billingAddress1,
  billingAddress2,
  city,
  state,
  zipCode,
  firstName,
  midInit,
  lastName,
  creditCard,
  token,
  year,
  month,
}) {
  const paymentMethod = await prisma.paymentMethod.create({
    data: {
      id: randomUUID().toString(),
      user_id,
      accountType,
      billingAddress1,
      billingAddress2,
      city,
      state,
      zipCode,
      firstName,
      midInit,
      lastName,
      creditCard,
      token,
      year,
      month,
    },
  });

  return paymentMethod;
}

export async function editPaymentMethod({
  paymentMethodId,
  billingAddress1,
  billingAddress2,
  city,
  state,
  zipCode,
  firstName,
  midInit,
  lastName,
  year,
  month,
}) {
  const paymentMethod = await prisma.paymentMethod.update({
    where: {
      id: paymentMethodId,
    },
    data: {
      billingAddress1,
      billingAddress2,
      city,
      state,
      zipCode,
      firstName,
      midInit,
      lastName,
      year,
      month,
    },
  });

  return paymentMethod;
}

export async function findById(id) {
  const paymentMethod = await prisma.paymentMethod.findFirst({
    where: {
      id,
    },
  });

  return paymentMethod;
}

export async function deleteById(id, userId) {
  await prisma.paymentMethod.delete({
    where: {
      id,
      user_id: userId,
    },
  });
}
