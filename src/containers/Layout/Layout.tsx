import { PropsWithChildren, ReactNode } from "react";
import { Outlet } from "react-router-dom";
import MainContent from "../MainContent/MainContent";
import Sidebar from "../Sidebar/Sidebar";

const Layout = (props: PropsWithChildren<ReactNode>) => {
  return (
    <>
      {/* <div className="sections"> */}
      <Sidebar />
      <MainContent>
        <Outlet></Outlet>
      </MainContent>
      {/* </div> */}
    </>
  );
};

export default Layout;
