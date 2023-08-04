import Nav from "./Nav";
import  {Outlet} from "react-router-dom";

const Layout = ( )=> {
    return (
        <main className="container">
            <Nav />
         <Outlet></Outlet>
        </main>
    )
}
export default Layout;