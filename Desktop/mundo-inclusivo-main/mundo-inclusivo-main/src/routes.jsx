import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Sobre from "./Pages/Sobre/Sobre";
import Apoio from "./Pages/Apoio/Apoio";
import Contato from "./Pages/Contato/Contato";
import Estatisticas from "./Pages/Estatisticas/Estatisticas";

function AppRoutes () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/Sobre" element={<Sobre/>}></Route>
                <Route path="/Apoio" element={<Apoio/>}></Route>
                <Route path="/Contato" element={<Contato/>}></Route>
                <Route path="/Estatisticas" element={<Estatisticas/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
