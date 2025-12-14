/*
  Warnings:

  - The `scopes` column on the `ShopifyStore` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "ShopifyStore" DROP COLUMN "scopes",
ADD COLUMN     "scopes" TEXT[];
