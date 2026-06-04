-- DropIndex
DROP INDEX "RentalData_areaId_key";

-- AlterTable
ALTER TABLE "Area" ADD COLUMN     "postcode" TEXT,
ADD COLUMN     "region" TEXT;

-- AlterTable
ALTER TABLE "BroadbandData" ADD COLUMN     "recordedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "CrimeData" ADD COLUMN     "recordedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "RentalData" ADD COLUMN     "recordedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "rentGrowth" DROP NOT NULL;
