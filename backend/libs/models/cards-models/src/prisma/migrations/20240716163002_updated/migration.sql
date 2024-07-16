-- CreateTable
CREATE TABLE "countries" (
    "country_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "flag" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "letter" TEXT NOT NULL,
    "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "countries_pkey" PRIMARY KEY ("country_id")
);
