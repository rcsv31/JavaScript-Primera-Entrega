//Productos y precios
const productos = {
  cluedo: 29.99,
  monopoly: 35.00,
  risk: 38.95
};

//Elegir producto
function seleccionarProducto() {
  let productoElegido;

  do {
    productoElegido = prompt("Elige un producto: cluedo, monopoly o risk").toLowerCase();
    if (!productos[productoElegido]) {
      alert("Producto no válido. Elige entre cluedo, monopoly o risk.");
    } else {
      alert(`Producto elegido: ${productoElegido}, Precio: ${productos[productoElegido]} €`);
    }
  } while (!productos[productoElegido]);

  return productoElegido;
}

//Ingresar cantidad
function ingresarCantidad() {
  let cantidad;

  do {
    cantidad = parseInt(prompt("Introduce la cantidad deseada"));
    if (isNaN(cantidad) || cantidad <= 0 || cantidad !== parseInt(cantidad)) {
      alert("La cantidad ingresada no es válida. Debe ser un número entero positivo.");
    }
  } while (isNaN(cantidad) || cantidad <= 0 || cantidad !== parseInt(cantidad));

  return cantidad;
}

//Calcular precio sin impuestos
function calcularPrecioSinImpuestos(productoElegido, cantidad) {
  const precioSinImpuestos = productos[productoElegido] * cantidad;
  alert(`El precio sin impuestos es: ${precioSinImpuestos.toFixed(2)} €`); // Mostrar precio sin impuestos
  return precioSinImpuestos; // Devolver el precio sin impuestos
}

//IVA según el pais
function obtenerIVA(pais) {
  const impuestos = {
    españa: 0.21,
    francia: 0.20,
    portugal: 0.23,
    italia: 0.22
  };

  return impuestos[pais.toLowerCase()] || null;
}

//Seleccionar pais
function seleccionarPais() {
  let pais;
  let iva;

  do {
    pais = prompt("Introduce tu país: España, Francia, Portugal o Italia").toLowerCase();
    iva = obtenerIVA(pais);
    if (iva === null) {
      alert("País no válido. Elige uno de los países de la lista.");
    } else {
      alert(`Se le aplicará un ${iva * 100}% de IVA.`);
    }
  } while (iva === null);

  return iva;
}

//Solicitar código de descuento
function solicitarCodigoDescuento() {
  return prompt("Introduce el código de descuento (Bienvenid@23 para 10% de descuento)");
}

//Calcular precio con impuestos y descuento
function calcularPrecioConDescuento(precioSinImpuestos, iva, codigoDescuento) {
  if (!isNaN(precioSinImpuestos) && !isNaN(iva)) {
    const precioConImpuestos = precioSinImpuestos * (1 + iva);

    if (codigoDescuento === "Bienvenid@23") {
      const descuento = precioSinImpuestos * 0.10;
      const precioConDescuento = precioSinImpuestos - descuento;
      const precioConDescuentoConImpuestos = precioConDescuento * (1 + iva);
      const ahorro = descuento.toFixed(2);
      alert(`¡Enhorabuena! Te has ahorrado ${ahorro} € (10% de descuento).`);
      alert(`El precio sin impuestos y descuento es: ${precioConDescuento.toFixed(2)} €.`);
      alert(`El precio con impuestos y descuento es: ${precioConDescuentoConImpuestos.toFixed(2)} €.`);
    } else {
      alert("Código de descuento incorrecto.");
      const tieneCodigoDescuento = confirm("¿Tiene algún código de descuento?");
      if (tieneCodigoDescuento) {
        const nuevoCodigoDescuento = prompt("Por favor, introduzca el código de descuento");
        calcularPrecioConDescuento(precioSinImpuestos, iva, nuevoCodigoDescuento);
      } else {
        alert(`El precio con impuestos es: ${precioConImpuestos.toFixed(2)} €.`);
      }
    }
  } 
}

//Ejecutar el programa
const productoElegido = seleccionarProducto();
const cantidad = ingresarCantidad();
const precioSinImpuestos = calcularPrecioSinImpuestos(productoElegido, cantidad);
const iva = seleccionarPais();
const codigoDescuento = solicitarCodigoDescuento();
calcularPrecioConDescuento(precioSinImpuestos, iva, codigoDescuento);