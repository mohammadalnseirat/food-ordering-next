-- CreateEnum
CREATE TYPE "ExtraIngredient" AS ENUM ('CHEESE', 'PEPPERONI', 'OLIVES', 'MUSHROOMS', 'ONIONS', 'TOMATOES', 'JALAPENOS', 'BACON', 'PARPER');

-- CreateTable
CREATE TABLE "Extra" (
    "id" TEXT NOT NULL,
    "name" "ExtraIngredient" NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "extraName" TEXT NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "Extra_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Extra" ADD CONSTRAINT "Extra_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
