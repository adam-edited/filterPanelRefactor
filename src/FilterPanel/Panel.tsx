import { Fragment } from "react";
import { filterComponents } from "./constants";
import { StyledPanel } from "./styles";
import { FilterComponentProps, FilterKey, FilterMap } from "./types";
import Title from "./sections/Title";

interface PanelProps extends Omit<FilterComponentProps, "onSelect"> {
  config: Array<FilterKey>;
  filterMap: FilterMap[];
  onSelect: (item: FilterKey | null) => void;
}

export default function Panel({
  type,
  config,
  onSelect,
  onToggle,
  selectedFilter,
  filterMap
}: PanelProps) {
  if (type === "side" && !selectedFilter) return null;
  return (
    <StyledPanel type={type}>
      <Title
        type={type}
        selectedFilter={selectedFilter}
        item={filterMap.find((i) => i.id === selectedFilter)}
        onSelect={() => onSelect(null)}
      />
      {config.map((item) => {
        return (
          <Fragment key={item}>
            {filterComponents[item]?.({
              type,
              selectedFilter: selectedFilter,
              item: filterMap.find((i) => i.id === item),
              onSelect: () => onSelect(item),
              onToggle
            })}
          </Fragment>
        );
      })}
    </StyledPanel>
  );
}
