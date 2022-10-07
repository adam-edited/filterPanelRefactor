import { FilterComponentProps } from "../../types";
import ColorsPanel from "./Colors";
import ColorsSide from "./ColorsSide";

export default function Colors(props: FilterComponentProps) {
  if (props.type === "panel") return <ColorsPanel {...props} />;
  if (props.type === "side") return <ColorsSide {...props} />;

  return null;
}
