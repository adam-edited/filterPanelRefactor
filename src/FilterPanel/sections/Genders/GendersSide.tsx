import { defaultGenders } from "./constants";
import type { FilterComponentProps } from "../../types";

export default function GendersSide({
  selectedFilter,
  item,
  onToggle
}: FilterComponentProps) {
  if (selectedFilter !== "genders") return null;

  const selectedGenders = item?.data || [];

  const onChange = (item: string) => {
    onToggle({ key: "genders", data: { id: item, value: item } });
  };

  return (
    <div>
      {defaultGenders.map((i) => {
        const isChecked = selectedGenders.find((t) => t.id === i.title);
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
