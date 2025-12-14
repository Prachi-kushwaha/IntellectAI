/*
  Warnings:

  - You are about to drop the `PasswordResetToken` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `VerificationToken` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PasswordResetToken" DROP CONSTRAINT "PasswordResetToken_userId_fkey";

-- DropForeignKey
ALTER TABLE "VerificationToken" DROP CONSTRAINT "VerificationToken_userId_fkey";

-- DropTable
DROP TABLE "PasswordResetToken";

-- DropTable
DROP TABLE "VerificationToken";

-- CreateTable
CREATE TABLE "ShopifyStore" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "storeName" TEXT NOT NULL,
    "shopDomain" TEXT NOT NULL,
    "scopes" TEXT NOT NULL,
    "accessToken" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ShopifyStore_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ShopifyStore_storeName_key" ON "ShopifyStore"("storeName");

-- CreateIndex
CREATE UNIQUE INDEX "ShopifyStore_shopDomain_key" ON "ShopifyStore"("shopDomain");
