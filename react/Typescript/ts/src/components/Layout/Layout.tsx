import Nav from "./Nav";
import { Outlet } from "react-router-dom";
import { FC, ReactElement } from "react";

const Layout: FC = (): ReactElement => (
  <main className="container">
    <Nav />
    <Outlet></Outlet>
  </main>
);

export default Layout;
