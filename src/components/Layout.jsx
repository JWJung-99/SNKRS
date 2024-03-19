import { Outlet } from "react-router-dom";
import Header from "@components/Header";
import ItemNav from "@components/ItemNav";
import Footer from "@components/Footer";


function Layout() {
  return (
    <div className="app">
      <Header />
      <ItemNav />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout;