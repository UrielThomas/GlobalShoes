import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Contacto, Home,Ninos,Caballero,DetailedProduct,Products,CategoryPage } from "../pages";
import {NavBarComponent,CategoriesComponent} from "../components";
import { ItemListComponent } from "../components";

export const MainRoutes = () => {
    return (
        <Router>
            <NavBarComponent/>
            <ItemListComponent/>
            <Routes>
                <Route exact path="/" element= {<Home/>}/>
                <Route exact path="/Contacto" element= {<Contacto/>}/>
                <Route exact path="/CategoryPage/:categoryID" element= {<CategoryPage/>}/>
                <Route exact path="/Products/:ProductId" element={<DetailedProduct/>}/>
            </Routes>

        </Router>
    )
}
