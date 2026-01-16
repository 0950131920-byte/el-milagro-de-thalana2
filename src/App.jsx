import { useState } from "react";
import "./App.css";
import logo from "./assets/imhome/thalanaimg.jpeg";
import Galeria from "./components/galeria";

function App() {
  const [seccion, setSeccion] = useState("inicio");
  const [carrito, setCarrito] = useState([]);

  // 👉 agregar producto
  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  // 👉 eliminar producto
  const eliminarDelCarrito = (index) => {
    const nuevoCarrito = carrito.filter((_, i) => i !== index);
    setCarrito(nuevoCarrito);
  };

  // 👉 total
  const total = carrito.reduce((acc, item) => acc + item.precio, 0);

  return (
    <div className="container">
      {/* ENCABEZADO */}
      <header className="header">
        <h1>Tienda El Milagro de Thalana</h1>

        <nav className="menu">
          <button onClick={() => setSeccion("inicio")}>Inicio</button>
          <button onClick={() => setSeccion("galeria")}>Galería</button>
          <button onClick={() => setSeccion("carrito")}>
            Carrito ({carrito.length})
          </button>
        </nav>
      </header>

      {/* INICIO */}
      {seccion === "inicio" && (
        <main className="inicio">
          <img src={logo} alt="Logo Tienda" className="thalana-img" />

          <section className="card">
            <h2>Sobre nosotros</h2>
            <p>
              Tienda El Milagro es una tienda de ropa dedicada a ofrecer prendas
              modernas, elegantes y de alta calidad para todo tipo de ocasión.
            </p>
          </section>

          <section className="card">
            <h2>Nuestros servicios</h2>
            <p>
              Ofrecemos venta de ropa, nuevas colecciones cada temporada y una
              experiencia de compra sencilla y segura.
            </p>
          </section>
        </main>
      )}

      {/* GALERÍA */}
      {seccion === "galeria" && (
        <Galeria agregarAlCarrito={agregarAlCarrito} />
      )}

      {/* CARRITO */}
      {seccion === "carrito" && (
        <main className="carrito">
          {carrito.length === 0 ? (
            <p>Tu carrito está vacío 🛒</p>
          ) : (
            <>
              {carrito.map((item, index) => (
                <div className="producto" key={index}>
                  <img src={item.imagen} alt={item.nombre} />
                  <h3>{item.nombre}</h3>
                  <p>${item.precio}</p>
                  <button onClick={() => eliminarDelCarrito(index)}>
                    Eliminar
                  </button>
                </div>
              ))}

              <h2>Total a pagar: ${total}</h2>
            </>
          )}

          {/* SECCIONES EXTRA */}
          <section className="card">
            <h2>Descuentos</h2>
            <p>Promociones exclusivas por tiempo limitado</p>
          </section>

          <section className="card">
            <h2>Colección Premium</h2>
            <p>Prendas seleccionadas de alta calidad</p>
          </section>

          <section className="card">
            <h2>Red de Afiliación</h2>
            <p>Gana comisiones recomendando nuestra tienda</p>
          </section>
        </main>
      )}

      {/* FOOTER */}
      <footer className="footer">
        <p>
          © 2026 Tienda El Milagro de Thalana | Proyecto académico | IG 📸
          thalana.ec
        </p>
      </footer>
    </div>
  );
}

export default App;