import { FilterComponentProps } from "../../types";
import GendersPanel from "./Genders";
import GendersSide from "./GendersSide";

export default function Genders(props: FilterComponentProps) {
  if (props.type === "panel") return <GendersPanel {...props} />;
  if (props.type === "side") return <GendersSide {...props} />;

  return null;
}
