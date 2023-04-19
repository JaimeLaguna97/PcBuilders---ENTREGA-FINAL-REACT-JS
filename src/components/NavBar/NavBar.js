import './NavBar.css';
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link className='Logo' to ='/'>
                <h3>PCbuilders</h3>
            </Link>           
            <div className="Categories">
                <NavLink to = {`/category/processors`}  className={({ isActive}) => isActive ? 'ActiveOption' : 'Option' }>Processors</NavLink>
                <NavLink to = {`/category/masterrace`}  className={ ({ isActive}) => isActive ? 'ActiveOption' : 'Option' }>MasterRace</NavLink>
                <NavLink to = {`/category/notebooks`}  className={ ({ isActive}) => isActive ? 'ActiveOption' : 'Option' }>Notebooks</NavLink>
            </div>
            <CartWidget /> 
        </nav> 
    )
};

export default NavBar;