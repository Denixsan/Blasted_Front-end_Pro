import Nav from "./Nav";
import { Outlet } from "react-router-dom";

const Layout = () => (
  <main className="container">
    <Nav />
    <Outlet></Outlet>
  </main>
);

export default Layout;
