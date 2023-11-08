import './App.css'
import Cantidad from "./Components/Cantidad";
import Descripcion from "./Components/Descripcion";
import Nombre from "./Components/Nombre";
import Precio from "./Components/Precio";
import SKU from "./Components/SKU";
import image01 from  "./assets/AD_GX0709-2.jpg";

function App() {
  return (
    <>
      <div className="App">
      <div className="section" id="product">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="left-images">
                <img src={image01} width="300px" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="right-content">
                <Nombre />
                <Precio />
                <Descripcion />
                <Cantidad />
                <SKU />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default App
