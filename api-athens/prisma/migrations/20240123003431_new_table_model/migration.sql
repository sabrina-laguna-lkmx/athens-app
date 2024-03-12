-- CreateTable
CREATE TABLE "Token_Reset_Password" (
    "id" VARCHAR(36) NOT NULL,
    "token" VARCHAR NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL,
    "userId" VARCHAR(36) NOT NULL,

    CONSTRAINT "token_reset_password_pk" PRIMARY KEY ("id")
);
