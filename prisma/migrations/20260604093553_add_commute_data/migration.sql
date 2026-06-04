-- CreateTable
CREATE TABLE "CommuteData" (
    "id" SERIAL NOT NULL,
    "destination" TEXT NOT NULL,
    "averageMinutes" INTEGER NOT NULL,
    "recordedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "areaId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CommuteData_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CommuteData" ADD CONSTRAINT "CommuteData_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "Area"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
