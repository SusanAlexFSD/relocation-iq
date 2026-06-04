-- CreateTable
CREATE TABLE "Area" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "city" TEXT NOT NULL,

    CONSTRAINT "Area_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RentalData" (
    "id" SERIAL NOT NULL,
    "averageRent" INTEGER NOT NULL,
    "rentGrowth" DOUBLE PRECISION NOT NULL,
    "areaId" INTEGER NOT NULL,

    CONSTRAINT "RentalData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CrimeData" (
    "id" SERIAL NOT NULL,
    "crimeScore" INTEGER NOT NULL,
    "areaId" INTEGER NOT NULL,

    CONSTRAINT "CrimeData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BroadbandData" (
    "id" SERIAL NOT NULL,
    "averageSpeed" INTEGER NOT NULL,
    "areaId" INTEGER NOT NULL,

    CONSTRAINT "BroadbandData_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RentalData_areaId_key" ON "RentalData"("areaId");

-- CreateIndex
CREATE UNIQUE INDEX "CrimeData_areaId_key" ON "CrimeData"("areaId");

-- CreateIndex
CREATE UNIQUE INDEX "BroadbandData_areaId_key" ON "BroadbandData"("areaId");

-- AddForeignKey
ALTER TABLE "RentalData" ADD CONSTRAINT "RentalData_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "Area"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CrimeData" ADD CONSTRAINT "CrimeData_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "Area"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BroadbandData" ADD CONSTRAINT "BroadbandData_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "Area"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
