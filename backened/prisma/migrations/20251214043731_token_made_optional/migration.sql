/*
  Warnings:

  - A unique constraint covering the columns `[accessToken]` on the table `ShopifyStore` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "ShopifyStore" ALTER COLUMN "accessToken" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ShopifyStore_accessToken_key" ON "ShopifyStore"("accessToken");
