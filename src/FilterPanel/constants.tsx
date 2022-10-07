import { FilterComponentProps, FilterKey, FilterMap } from "./types";
import Genders from "./sections/Genders";
import Colors from "./sections/Colors";

const filterMap: FilterMap[] = [
  { id: "date", title: "Dates", data: [] },
  { id: "markets", title: "Markets", data: [] },
  { id: "retailers", title: "Retailers", data: [] },
  { id: "brands", title: "Brands", data: [] },
  { id: "genders", title: "Genders", data: [] },
  { id: "specialities", title: "Specialities", data: [] },
  { id: "catergories", title: "Catergories", data: [] },
  { id: "details", title: "Details", data: [] },
  { id: "keywords", title: "Keywords", data: [] },
  { id: "colors", title: "Colours", data: [] },
  { id: "patterns", title: "Patterns", data: [] },
  { id: "price", title: "Price", data: [] }
];

const filterComponents: Record<
  FilterKey,
  React.FC<FilterComponentProps> | null
> = {
  genders: ({ children, ...props }) => <Genders {...props} />,
  colors: ({ children, ...props }) => <Colors {...props} />,
  date: null,
  markets: null,
  retailers: null,
  brands: null,
  specialities: null,
  catergories: null,
  details: null,
  keywords: null,
  patterns: null,
  price: null
};

export { filterMap, filterComponents };
