import { FilterComponentProps } from "../types";

export default function Title({
  type,
  item
}: Omit<FilterComponentProps, "onToggle">) {
  if (type === "panel") return null;
  const title = item?.title || "";
  return (
    <div>
      <h2> {title} </h2>
    </div>
  );
}
