document.addEventListener("DOMContentLoaded", () => {
  const detalleServicio = document.getElementById("detalle-servicio");

  // Obtener los datos de los servicios almacenados en el localStorage
  const servicio = JSON.parse(localStorage.getItem("servicio"));

  // Mostrar los detalles del servicio en la página de servicio.html
  if (servicio) {
    detalleServicio.innerHTML = `
            <h3>${servicio.nombre}</h3>
            <p>Profesión: ${servicio.profesion}</p>
            <p>Teléfono: ${servicio.telefono}</p>
            <p>Email: ${servicio.email}</p>
            <p>Precio: ${servicio.precio}</p>
            <img src="${servicio.foto}" alt="${servicio.nombre}">
            <a class="volverBtn" href="index.html">Volver</a>
        `;
  } else {
    // Mostrar un mensaje si el servicio no se encuentra
    detalleServicio.innerHTML = "<p>Servicio no encontrado.</p>";
  }
});
