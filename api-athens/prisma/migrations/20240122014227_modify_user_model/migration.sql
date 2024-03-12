/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `last_name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "last_name",
DROP COLUMN "name",
ALTER COLUMN "user_id" SET DATA TYPE VARCHAR(36),
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("user_id");
