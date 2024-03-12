-- CreateTable
CREATE TABLE "PaymentMethod" (
    "id" VARCHAR(36) NOT NULL,
    "user_id" TEXT NOT NULL,
    "accountType" VARCHAR(255) NOT NULL,
    "billingAddress1" VARCHAR(255) NOT NULL,
    "billingAddress2" VARCHAR(255),
    "city" VARCHAR(255) NOT NULL,
    "creditCard" VARCHAR(16) NOT NULL,
    "cvv" VARCHAR(4) NOT NULL,
    "firstName" VARCHAR(50) NOT NULL,
    "lastName" VARCHAR(50) NOT NULL,
    "midInit" VARCHAR(1) NOT NULL,
    "month" VARCHAR(2) NOT NULL,
    "state" VARCHAR(50) NOT NULL,
    "year" VARCHAR(4) NOT NULL,
    "zipCode" VARCHAR(10) NOT NULL,

    CONSTRAINT "PaymentMethod_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PaymentMethod" ADD CONSTRAINT "PaymentMethod_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
