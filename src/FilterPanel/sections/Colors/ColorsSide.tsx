import { defaultColors } from "./constants";
import type { FilterComponentProps } from "../../types";

export default function ColorsSide({
  selectedFilter,
  onToggle,
  item
}: FilterComponentProps) {
  if (selectedFilter !== "colors") return null;

  const selectedColors = item?.data || [];
  const onChange = (item: string) => {
    onToggle({ key: "colors", data: { id: item, value: item } });
  };

  return (
    <div>
      {defaultColors.map((i) => {
        const isChecked = selectedColors.find((t) => t.id === i.title);
        return (
          <div key={i.title}>
            <input
              type="checkbox"
              checked={!!isChecked}
              onChange={() => onChange(i.title)}
            />
            {i.title}
          </div>
        );
      })}
    </div>
  );
}
