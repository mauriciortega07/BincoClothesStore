
import UserAcces from "./components/UserAcces";
import {Route, Routes} from 'react-router-dom';
import BincoLogo from './utilities/images/images_logo/Binco_logo.webp'
import ProductsAll from "./components/Products/ProductsAll";
import ClothesMen from "./components/Products/ClothesMen";
import ClothesWomen from "./components/Products/ClothesWomen";
import Electronics from "./components/Products/Electronics";
import Jewelery from "./components/Products/Jewelery";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserAcces image={BincoLogo} />} />
        <Route path="/Inicio" element={<ProductsAll />}/>
        <Route path="/Ropa_de_Hombre" element={<ClothesMen />}/>
        <Route path="/Ropa_de_Mujer" element={<ClothesWomen />}/>
        <Route path="/Electronicos" element={<Electronics />}/>
        <Route path="/Joyeria" element={<Jewelery />} />
      </Routes>
    </div>
  );
}

export default App;
