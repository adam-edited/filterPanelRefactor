import { toggleData } from "./helpers";
import { FilterMap } from "./types";

describe("helper funcs", () => {
  it("adds data", () => {
    const map: FilterMap = { id: "colors", title: "C", data: [] };
    const data = { id: "black", value: "Black" };
    expect(toggleData(map, data)).toEqual({
      id: "colors",
      title: "C",
      data: [{ id: "black", value: "Black" }]
    });
  });

  it("adds more data", () => {
    const map: FilterMap = {
      id: "colors",
      title: "C",
      data: [{ id: "green", value: "Green" }]
    };
    const data = { id: "black", value: "Black" };

    expect(toggleData(map, data)).toEqual({
      id: "colors",
      title: "C",
      data: [
        { id: "green", value: "Green" },
        { id: "black", value: "Black" }
      ]
    });
  });

  it("removes data", () => {
    const map: FilterMap = {
      id: "colors",
      title: "C",
      data: [{ id: "black", value: "Black" }]
    };
    const data = { id: "black", value: "Black" };
    expect(toggleData(map, data)).toEqual({
      id: "colors",
      title: "C",
      data: []
    });
  });
});
