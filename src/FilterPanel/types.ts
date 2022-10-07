export type FilterKey =
  | "date"
  | "markets"
  | "retailers"
  | "brands"
  | "genders"
  | "specialities"
  | "catergories"
  | "details"
  | "keywords"
  | "colors"
  | "patterns"
  | "price";

export type FilterMap = {
  id: FilterKey;
  title: string;
  data: Array<{ id: string; value: string }>;
};

export interface State {
  selectedFilter: null | FilterKey;
  filterMap: FilterMap[];
}

export enum ActionTypes {
  selectPanel = "SELECT_PANEL",
  toggleFilter = "TOGGLE_FILTER"
}

export type ToggleKey = { key: FilterKey; data: { id: string; value: string } };

export type Action =
  | { type: ActionTypes.selectPanel; payload: FilterKey | null }
  | {
      type: ActionTypes.toggleFilter;
      payload: ToggleKey;
    };

export type PanelTypes = "panel" | "side";

export type FilterComponentProps = {
  item?: FilterMap;
  onSelect: () => void;
  selectedFilter: FilterKey | null;
  onToggle: (item: ToggleKey) => void;
  type: PanelTypes;
};
