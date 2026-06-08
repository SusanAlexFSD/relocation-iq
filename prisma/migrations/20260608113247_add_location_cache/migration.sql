-- CreateTable
CREATE TABLE "LocationCache" (
    "id" SERIAL NOT NULL,
    "searchTerm" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LocationCache_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LocationCache_searchTerm_key" ON "LocationCache"("searchTerm");
