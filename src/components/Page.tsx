import Navbar from "./Navbar";
import Sidebar, { SidebarItem } from "./Sidebar";
import Header from "./Header";
import styled from "styled-components";
import { PageType } from "../App";

const Content = styled.div`
  margin-left: 60px;
`;

interface PageProps {
  children: React.ReactNode;
  page: PageType;
  setPage: (page: PageType) => void;
}

const Page = ({ children, setPage }: PageProps) => {
  return (
    <div>
      <Sidebar>
        <SidebarItem onClick={() => setPage("market")}> Market </SidebarItem>
        <SidebarItem onClick={() => setPage("dashboards")}> Dash </SidebarItem>
      </Sidebar>
      <Content>
        <Navbar />
        <Header />
        {children}
      </Content>
    </div>
  );
};

export default Page;
