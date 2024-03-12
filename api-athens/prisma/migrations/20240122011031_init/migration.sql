-- CreateTable
CREATE TABLE "User" (
    "user_id" VARCHAR(32) NOT NULL,
    "email" TEXT NOT NULL,
    "name" VARCHAR NOT NULL,
    "last_name" VARCHAR NOT NULL,
    "salt" VARCHAR NOT NULL,
    "hash" VARCHAR NOT NULL,
    "created_at" TIMESTAMP NOT NULL,
    "update_at" TIMESTAMP NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
