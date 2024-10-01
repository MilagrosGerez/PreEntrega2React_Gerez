import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget"

function NavBar (){
    return (
   <header>
   <nav>
    <Link to ='/'>
    <img src="./images/logo_norcita.png" className="rounded float-start" alt="Logo de Jazmín difusores." />
    </Link>
        <div>
            <NavLink to={'/category/Dulces' } className={({isActive}) => isActive ? 'ActiveOption' : 'option '}/>
            <NavLink to={'/category/Florales' } className={({isActive}) => isActive ? 'ActiveOption' : 'option '}/>
            <NavLink to={'/category/Productos' } className={({isActive}) => isActive ? 'ActiveOption' : 'option '}/>
        </div>
    </nav>
    <CartWidget/>
   </header>
    
    )
}

export default NavBar;