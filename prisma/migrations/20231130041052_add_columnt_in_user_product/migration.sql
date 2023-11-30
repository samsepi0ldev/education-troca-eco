/*
  Warnings:

  - Added the required column `is_valid` to the `product_user` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_product_user" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "is_valid" BOOLEAN NOT NULL,
    "ownerId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "product_user_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "product_user_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_product_user" ("created_at", "id", "ownerId", "productId") SELECT "created_at", "id", "ownerId", "productId" FROM "product_user";
DROP TABLE "product_user";
ALTER TABLE "new_product_user" RENAME TO "product_user";
CREATE UNIQUE INDEX "product_user_ownerId_productId_created_at_key" ON "product_user"("ownerId", "productId", "created_at");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
