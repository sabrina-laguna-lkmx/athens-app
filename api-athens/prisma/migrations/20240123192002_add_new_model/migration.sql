-- CreateTable
CREATE TABLE "Token_active_account" (
    "id" VARCHAR(36) NOT NULL,
    "token" VARCHAR NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL,
    "userId" VARCHAR(36) NOT NULL,

    CONSTRAINT "token_active_account_pk" PRIMARY KEY ("id")
);
