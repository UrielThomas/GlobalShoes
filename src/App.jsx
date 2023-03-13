import { ItemListComponent } from "./components";
import { MainLayout } from "./layouts";
function App() {



  return (
    <MainLayout>
      <div>
        <div><ItemListComponent item= "Item"/></div>
        <div><ItemListComponent anotherItem="Another item"/></div>
    </div>
    </MainLayout>
  );
}

export default App;
