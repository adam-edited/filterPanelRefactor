import Tag from "../../../elements/Tag";
import FilterItem from "../../FilterItem";
import { FilterComponentProps } from "../../types";

export default function Colors({
  item,
  onSelect,
  type,
  onToggle
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
          onClick={() => onToggle({ key: "colors", data: i })}
        >
          {i.value}
        </Tag>
      ))}
    </div>
  );
}
