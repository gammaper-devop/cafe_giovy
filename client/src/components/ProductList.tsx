import { useState, useEffect } from 'react';
import { Product } from '../interfaces/Product.interface';

function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Realiza una solicitud GET a la ruta de obtención de productos en tu servidor.
    fetch('http://localhost:3002/productos')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // La respuesta contiene los datos de los productos.
        setProducts(data);
      })
      .catch((error) => {
        console.error('Error al obtener productos:', error);
      });
  }, []);

  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-around items-center">
        {products.map((product) => (
          <div key={product._id} className="flex-1 m-5 rounded-xl px-4 py-6 sm:px-8 sm:py-10 tm-bg-brown tm-item-container">
            <img src={product.image} alt="Image" className="rounded-md" />
            <div className="flex items-start mb-6 tm-menu-item">
              <div className="ml-3 sm:ml-6">
                <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 tm-text-yellow">{product.descripcion}</h3>
                {product.tipos.map((tipo, index) => (
                  <div key={index} className="text-white text-md sm:text-lg font-light">
                    {tipo.nombre} S/. {tipo.precio.toFixed(2)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
