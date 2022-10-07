import { FilterMap } from "./types";

const toggleData = (
  map: FilterMap,
  { id, value }: { id: string; value: string }
): FilterMap => {
  if (map.data.find((i) => i.id === id)) {
    return { ...map, data: map.data.filter((i) => i.id !== id) };
  }
  return { ...map, data: [...map.data, { id, value }] };
};

export { toggleData };
