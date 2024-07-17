import { CardApi, CountryApi } from '@backend/shared-types';
import axios from 'axios';

const mockData = {
  regions: ['Europe', 'Americas', 'Oceania', 'Asia'],
  transport: ['plane', 'bus', 'bycicle', 'walking'],
  tags: ['#ЗОЖ', '#ПП', '#спорт', '#отдых', '#танцы', '#бар', '#концерт'],
  names: {
    female: ['Елена', 'Татьяна', 'Aнна', 'Юлия'],
    male: ['Олег', 'Иван', 'Дмитрий', 'Владислав'],
    lastnames: ['Иванов', 'Петров', 'Сидоров', 'Федоров', 'Демин'],
  },
};
const COUNTRIES_START = 1; //only for dev

export const getCountries = async () => {
  const link =
    'https://restcountries.com/v3.1/all?fields=name,flags,region,translations';
  const res = await axios.get(link).then((res) => {
    const data = res.data
      .filter((item: CountryApi) => mockData.regions.includes(item.region))
      .map((item: CountryApi) => {
        const name = item.translations.rus.common;
        const isIsland = item.translations.rus.official
          .toLowerCase()
          .includes('остров');
        const letter = name.charAt(0);
        const region = item.region.toLowerCase();
        const flag = item.flags.svg;
        return { name, letter, region, flag, isIsland };
      });
    return data;
  });
  return res;
};

export const getCards = async () => {
  const link = 'https://randomuser.me/api/?results=15';
  const res = await axios.get(link).then((res) => {
    const data = res.data.results.map((item: CardApi) => {
      const isMan = item.gender === 'male' ? true : false;
      const name = `${getRandomItem(
        isMan ? mockData.names.male : mockData.names.female
      )} ${getRandomItem(mockData.names.lastnames)}${isMan ? '' : 'a'}`;
      const places = Array.from({ length: getRandomValue(1, 4) }, () =>
        getRandomValue(COUNTRIES_START, COUNTRIES_START + 185)
      );
      const photo = item.picture.large;
      const tags = getRandomItems(mockData.tags);
      const transport = getRandomItems(mockData.transport);
      const level = getRandomValue(0, 100);
      const people = getRandomValue(1, 10);
      const duration = 2;
      const dateStart = new Date(2024, 6, 15).toISOString();
      const dateEnd = new Date(2024, 6, 17).toISOString();
      const entertainment = Array.from(
        { length: places.length },
        (_, i) => `${places[i]}, ${getRandomItems(mockData.tags)}`
      );
      return {
        name,
        photo,
        tags,
        transport,
        level,
        places,
        duration,
        people,
        dateStart,
        dateEnd,
        entertainment,
      };
    });
    return data;
  });
  return res;
};

function getRandomValue(min: number, max: number, numAfterDigit = 0) {
  return +(Math.random() * (max - min) + min).toFixed(numAfterDigit);
}

function getRandomItems<T>(items: T[]): T[] {
  const start = getRandomValue(0, items.length - 1);
  const end = start + getRandomValue(start, items.length);
  return items.slice(start, end);
}

function getRandomItem<T>(items: T[]): T {
  return items[getRandomValue(0, items.length - 1)];
}
