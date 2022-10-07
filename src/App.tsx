import { useState } from "react";
import Page from "./components/Page";
import FilterPanel from "./FilterPanel";
import "./styles.css";

export type PageType = "market" | "dashboards";

export default function App() {
  const [page, setPage] = useState<PageType>("market");

  return (
    <div className="App">
      <Page page={page} setPage={setPage}>
        <FilterPanel config={["colors", "genders"]} />
      </Page>
    </div>
  );
}
