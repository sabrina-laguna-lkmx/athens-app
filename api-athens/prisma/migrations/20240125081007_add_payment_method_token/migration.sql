/*
  Warnings:

  - Added the required column `token` to the `PaymentMethod` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PaymentMethod" ADD COLUMN     "token" VARCHAR(150) NOT NULL;
