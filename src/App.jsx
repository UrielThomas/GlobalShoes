import React from "react";
import { MainLayout } from "./layouts";
import { MainRoutes } from "./routes/MainRoutes";

// TODO: BUTTON TO TAKE OUT ITEM FROM CHECKOUT DB// INCREASE NUMBER OF CART ICON// MAKE THE CHECKOUT ACTUALLY IN THE CHECKOUT. ITEMS FROM THE DETAIL MUST GO TO CHECKOUT


function App() {



  return (
    <MainLayout>
      <MainRoutes/>
    </MainLayout>
  );
}

export default App;
