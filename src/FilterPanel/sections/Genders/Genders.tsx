import FilterItem from "../../FilterItem";
import { FilterComponentProps } from "../../types";
import Tag from "../../../elements/Tag";

export default function Genders({
  item,
  onSelect,
  onToggle,
  type
}: FilterComponentProps) {
  if (!item) return null;
  if (type === "side") return null;

  const data = item?.data || [];

  return (
    <div>
      <FilterItem title={item.title} onClick={onSelect} />
      {data.map((i) => (
        <Tag
          key={`${i.id}-panel`}
          onClick={() => onToggle({ key: "genders", data: i })}
        >
          {i.value}
        </Tag>
      ))}
    </div>
  );
}
