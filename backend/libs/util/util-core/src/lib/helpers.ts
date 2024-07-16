import { ClassConstructor, plainToInstance } from "class-transformer";
import { Region} from "@backend/shared-types"
import { RegionToName } from "./constant";

export function fillObject<T, V>(someDto: ClassConstructor<T>, plainObject: V) {
  return plainToInstance(someDto, plainObject, {
    excludeExtraneousValues: true,
  });
}

export const formatRegion = (isIsland:boolean, region:Region):string => isIsland ? RegionToName.Oceania : RegionToName[region];

