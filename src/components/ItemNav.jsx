import { Link, NavLink } from "react-router-dom";
import '@components/ItemNav.css';


function ItemNav() {
  return (
    <header className="item-header">
      <Link to="/feed"><img src="/src/assets/snkrs.png" alt="SNKRS" className="logo" /></Link>
      <NavLink to="/feed" className="">Feed</NavLink>
      <NavLink to="/instock" className="">In Stock</NavLink>
      <NavLink to="/upcoming" className="">Upcoming</NavLink>
    </header>
  )
}

export default ItemNav;