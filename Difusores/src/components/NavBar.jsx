import { BrowserRouter, Link, NavLink, Routes } from "react-router-dom";
import CartWidget from "./CartWidget"
import ProductsView from './views/ProductsView/ProductsView';
import FloralesView from './views/FloralesView/FloralesView';
import DulcesView from './views/DulcesView/DulcesView';

function NavBar (){
    return (
   <header>
   <nav>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<ProductsView />} />
        <Route path="/category/Florales" element={<FloralesView />} />
        <Route path="/category/Dulces" element={<DulcesView />} />
        <Route path="*" element={<h1>Not found</h1>}/>
    </Routes>
    </BrowserRouter>
    </nav>
    <CartWidget/>
   </header>
    
    )
}

export default NavBar;