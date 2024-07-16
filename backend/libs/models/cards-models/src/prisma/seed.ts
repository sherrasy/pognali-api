import { PrismaClient } from '@prisma/client';
import { CountryApi } from '@backend/shared-types';
import axios from 'axios';

const prisma = new PrismaClient();
const DEFAULT_REGIONS = ["Europe","Americas","Oceania","Asia"];

const getCountries = async () => {
  const link = 'https://restcountries.com/v3.1/all?fields=name,flags,region,translations';
  const res = await axios.get(link).then((res)=>{
    const data = res.data.filter((item: CountryApi)=> DEFAULT_REGIONS.includes(item.region)).map((item: CountryApi)=>{
      const name = item.translations.rus.common;
      const isIsland = item.translations.rus.official.toLowerCase().includes('остров')
      const letter = name.charAt(0);
      const region = item.region.toLowerCase();
      const flag = item.flags.svg;
      return {name, letter, region, flag, isIsland};
    });
    return data;
  })
  return res;
};

async function fillDb() {
  await prisma.country.createMany({
    data: await getCountries(),
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
