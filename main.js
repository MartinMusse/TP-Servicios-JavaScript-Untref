const mostrarServicios = (section, servicios) => {
  // Aquí se muestra la lista de servicios en la página principal
  servicios.forEach((servicio) => {
    const servicioElement = document.createElement("div");
    servicioElement.innerHTML = `
            <p>${servicio.profesion}</p>
            <img src="${servicio.foto}" alt="${servicio.nombre}">
            <button class="verMas" data-id="${servicio.id}">Ver Más</button>
        `;

    // Redirige a la página de servicios seleccionado
    const verMasBtn = servicioElement.querySelector(".verMas");
    verMasBtn.addEventListener("click", (e) => {
      const servicioId = verMasBtn.getAttribute("data-id");

      // Buscar el servicio con el servicio Id en los datos cargados
      const servicio = servicios.find(
        (servicio) => servicio.id === parseInt(servicioId)
      );

      localStorage.setItem("servicio", JSON.stringify(servicio));

      window.location.href = `servicio.html`;
    });

    section.appendChild(servicioElement);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const serviciosLista = document.getElementById("servicios-lista");

  // Cargar servicios de localStorage
  let servicios = localStorage.getItem("servicios");

  if (servicios) {
    // Mostrar los servicios en la página
    const serviciosLocalStorage = JSON.parse(servicios);
    mostrarServicios(serviciosLista, serviciosLocalStorage.Servicios);
  } else {
    // Cargar datos desde el archivo JSON (servicios.json)
    fetch("servicios.json")
      .then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            // Almacenar los datos en el localStorage
            localStorage.setItem("servicios", JSON.stringify(data));

            // Mostrar los servicios en la página
            mostrarServicios(serviciosLista, data.Servicios);
          });
        } else {
          console.error("Error al cargar el archivo JSON:");
        }
      })
      .catch((error) => {
        console.error("Error al cargar el archivo JSON:", error);
      });
  }
});
