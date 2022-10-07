import styled from "styled-components";

const StyledPanel = styled.aside<{ type: "panel" | "side" }>`
  width: ${({ type }) => (type === "panel" ? "206px" : "330px")};
  background: white;
  color: #7a818d;
  font-size: 12px;
  height: 100%;
  position: absolute;
  border-right: 1px solid #e6e6eb;
  margin-left: ${({ type }) => (type === "panel" ? 0 : "207px")};
`;

export { StyledPanel };
