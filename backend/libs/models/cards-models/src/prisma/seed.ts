import { PrismaClient } from '@prisma/client';
import { getCards, getCountries } from './mock';

const prisma = new PrismaClient();

async function fillDb() {
  // await prisma.country.createMany({
  //   data: await getCountries(),
  // });
  await prisma.card.createMany({
    data: await getCards(),
  });

  console.info('Database was filled');
}

fillDb()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();

    process.exit(1);
  });
