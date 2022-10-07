import styled from "styled-components";

const Sidebar = styled.aside`
  height: 100%;
  width: 60px;
  background: #35383e;
  border-right: 1px solid #7a818d;
  position: absolute;
  color: lightgray;
`;

const SidebarItem = styled.div`
  padding: 5px 0;
  cursor: pointer;
`;

export { Sidebar as default, SidebarItem };
