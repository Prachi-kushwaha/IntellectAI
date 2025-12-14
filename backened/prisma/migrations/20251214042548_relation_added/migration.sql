/*
  Warnings:

  - You are about to drop the column `shopDomain` on the `ShopifyStore` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[storeDomain]` on the table `ShopifyStore` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `storeDomain` to the `ShopifyStore` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "ShopifyStore_shopDomain_key";

-- AlterTable
ALTER TABLE "ShopifyStore" DROP COLUMN "shopDomain",
ADD COLUMN     "storeDomain" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ShopifyStore_storeDomain_key" ON "ShopifyStore"("storeDomain");

-- AddForeignKey
ALTER TABLE "ShopifyStore" ADD CONSTRAINT "ShopifyStore_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
