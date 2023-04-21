import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Contacto, Home,DetailedProduct,Products,CategoryPage,Checkout } from "../pages";
import {NavBarComponent,CategoriesComponent} from "../components";
import { ItemListComponent } from "../components";
import { NewProductFormComponent } from "../components/NewProductFormComponent/NewProductFormComponent";

export const MainRoutes = () => {
    return (
        <Router>
            <NavBarComponent/>
            <Routes>
                <Route exact path="/" element= {<Home/>}/>
                <Route exact path="/Products" element= {<Products/>}/>
                <Route exact path="/CategoryPage/:category" element= {<CategoryPage/>}/>
                <Route exact path="/Products/:itemId" element={<DetailedProduct/>}/>
                <Route exact path="/new-product" element={<NewProductFormComponent />}/>
                <Route exact path="/checkout" element={< Checkout/>}/>
            </Routes>

        </Router>
    )
}
