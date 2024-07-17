-- CreateTable
CREATE TABLE "countries" (
    "country_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "flag" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "letter" TEXT NOT NULL,
    "isIsland" BOOLEAN NOT NULL,
    "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "countries_pkey" PRIMARY KEY ("country_id")
);

-- CreateTable
CREATE TABLE "cards" (
    "card_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "places" INTEGER[],
    "tags" TEXT[],
    "transport" TEXT[],
    "level" INTEGER NOT NULL,
    "people" INTEGER NOT NULL,
    "duration" INTEGER NOT NULL,
    "dateStart" TEXT NOT NULL,
    "dateEnd" TEXT NOT NULL,
    "entertainment" TEXT[],

    CONSTRAINT "cards_pkey" PRIMARY KEY ("card_id")
);
