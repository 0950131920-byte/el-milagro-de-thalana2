import blancaglam from "../assets/galeria/blancaglam.jpeg";
import fusiamode2 from "../assets/galeria/fusiamode2.jpeg";
import body from "../assets/galeria/body.jpeg";
import fusia from "../assets/galeria/fusia.jpeg";
import rosa from "../assets/galeria/rosa.jpeg";
import rosaglammode from "../assets/galeria/rosaglammode.jpeg";
import rosamode from "../assets/galeria/rosamode.jpeg";
import setdeportivo from "../assets/galeria/setdeportivo.jpeg";

function Galeria({ agregarAlCarrito }) {
  const productos = [
    {
      nombre: "Vestido Blanco",
      precio: 45,
      imagen: blancaglam,
    },
    {
      nombre: "Vestido Fucsia",
      precio: 48,
      imagen: fusiamode2,
    },
    {
      nombre: "Body Casual",
      precio: 30,
      imagen: body,
    },
    {
      nombre: "Conjunto Fusia",
      precio: 52,
      imagen: fusia,
    },
    {
      nombre: "Vestido Rosa",
      precio: 46,
      imagen: rosa,
    },
    {
      nombre: "Rosa Glam",
      precio: 60,
      imagen: rosaglammode,
    },
    {
      nombre: "Rosa Mode",
      precio: 50,
      imagen: rosamode,
    },
    {
      nombre: "Set Deportivo",
      precio: 38,
      imagen: setdeportivo,
    },
  ];

  return (
    <div className="galeria">
      <h2>Nuestra Colección</h2>

      <div className="productos">
        {productos.map((producto, index) => (
          <div className="producto" key={index}>
            <img src={producto.imagen} alt={producto.nombre} />
            <h3>{producto.nombre}</h3>
            <p className="precio">${producto.precio}</p>
            <button
              className="btn-carrito"
              onClick={() => agregarAlCarrito(producto)}
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Galeria;