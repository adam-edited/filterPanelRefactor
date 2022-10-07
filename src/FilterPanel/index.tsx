import { useReducer } from "react";
import reducer from "./reducer";
import { filterMap } from "./constants";
import { ActionTypes, FilterKey, PanelTypes, ToggleKey } from "./types";
import Panel from "./Panel";

const initialState = { selectedFilter: null, filterMap };
const panels: PanelTypes[] = ["panel", "side"];

interface FilterPanelProps {
  config: Array<FilterKey>;
}

const FilterPanel = ({ config }: FilterPanelProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      {panels.map((i) => (
        <Panel
          key={i}
          type={i}
          selectedFilter={state.selectedFilter}
          onSelect={(item) =>
            dispatch({ type: ActionTypes.selectPanel, payload: item })
          }
          onToggle={(item: ToggleKey) =>
            dispatch({ type: ActionTypes.toggleFilter, payload: item })
          }
          config={config}
          filterMap={state.filterMap}
        />
      ))}
    </>
  );
};

export default FilterPanel;
