/*
  Warnings:

  - You are about to drop the column `averageRent` on the `RentalData` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "RentalData" DROP COLUMN "averageRent",
ADD COLUMN     "averageRent1Bed" INTEGER,
ADD COLUMN     "averageRent2Bed" INTEGER,
ADD COLUMN     "averageRent3Bed" INTEGER,
ADD COLUMN     "averageRent4Bed" INTEGER;
