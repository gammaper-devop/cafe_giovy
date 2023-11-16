import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Sidebar from '../components/Sidebar'
import Product from '../pages/Product'
import TipoProductos from '../pages/Type'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className='container-fluid bg-secondary min-vh-100'>
        <div className='row'>
          <div className='col-4 col-md-2 bg-white vh-100'>
            <Sidebar />
          </div>
          <div className='col bg-white'>
            <Routes>
              <Route path="/" element={<Product />} />
              <Route path="/product" element={<Product />} />
              <Route path="/type" element={<TipoProductos />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
