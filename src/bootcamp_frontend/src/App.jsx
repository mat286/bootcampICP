import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { bootcamp_backend } from 'declarations/bootcamp_backend';

import Tienda from './Tienda/Tienda.jsx';
import Header from './components/Header.jsx';
import Carrito from './components/Carrito.jsx';
import Armario from './components/Armario.jsx';
import VerProducto from './Tienda/VerProducto.jsx';
import Inicio from './inicio/Inicio.jsx';
import Footer from './components/Footer.jsx';

function App() {
  /* const [productos, setProductos] = useState([]);

  function handleProduct() {
    bootcamp_backend.listarProductos().then((productos) => {
      console.log(productos)
      setProductos(productos);
    });
    return productos;
  } */
  const [carrito, setCarrito] = useState([]);
  const agregarCarrito = (producto) => {
    setCarrito((prevCarrito) => {
      const productoExistente = prevCarrito.find(item => item.id === producto.id);
      if (productoExistente) {
        return prevCarrito.map(item =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + producto.cantidad }
            : item
        );
      } else {
        return [...prevCarrito, producto];
      }
    });
  };

  const eliminarProducto = (id) => {
    setCarrito((prevCarrito) => prevCarrito.filter(item => item.id !== id));
  };

  const actualizarCantidad = (id, nuevaCantidad) => {
    setCarrito((prevCarrito) =>
      prevCarrito.map(item =>
        item.id === id ? { ...item, cantidad: nuevaCantidad } : item
      )
    );
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Inicio /* handleProduct={handleProduct} */ />} />
          <Route path="/tienda" element={<Tienda agregarCarrito={agregarCarrito} />} />
          <Route path="/carrito" element={<Carrito carrito={carrito} eliminarProducto={eliminarProducto} actualizarCantidad={actualizarCantidad} />} />
          <Route path="/armario" element={<Armario />} />
          <Route path="/producto/:id" element={<VerProducto agregarCarrito={agregarCarrito} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
