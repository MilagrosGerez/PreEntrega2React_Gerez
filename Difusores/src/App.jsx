import { BrowserRouter, Routes, Route} from "react-router-dom";
import LogoView from './views/LogoView/LogoView';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

import ItemCount from './components/ItemCount/ItemCount';



import './App.css';

function App() {

  return (
    <>
    <div>
      
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<LogoView />} />
        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
        <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
        <Route path="*" element={<h1>Not found</h1>}/>
      </Routes>
      <ItemCount/>
      
      </BrowserRouter>
    </div>
    </>
  )
 
}

export default App
