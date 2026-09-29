import { series } from './data.js';
const tablaContenido = document.getElementById("contenido-series");
const contenedorPromedio = document.getElementById("promedio-temporadas");
const contenedorDetalle = document.getElementById("serie-detalle");
let serieSeleccionada = null;
inicializarTabla(series);
calcularPromedioTemporadas(series);
if (series.length > 0) {
    mostrarDetalleSerie(series[0]);
}
function inicializarTabla(datosSeries) {
    tablaContenido.innerHTML = '';
    for (let i = 0; i < datosSeries.length; i++) {
        const fila = document.createElement("tr");
        fila.classList.add('serie-fila');
        fila.innerHTML = `
            <td>${datosSeries[i].id}</td>
            <td>${datosSeries[i].name}</td>
            <td>${datosSeries[i].channel}</td>
            <td>${datosSeries[i].seasons}</td>
        `;
        fila.addEventListener('click', () => {
            mostrarDetalleSerie(datosSeries[i]);
        });
        tablaContenido.appendChild(fila);
    }
}
function mostrarDetalleSerie(serie) {
    serieSeleccionada = serie;
    contenedorDetalle.innerHTML = `
        <img src="${serie.image}" class="card-img-top" alt="${serie.name}">
        <div class="card-body">
            <h5 class="card-title">${serie.name}</h5>
            <p class="card-text">${serie.description}</p>
            <a href="${serie.link}" target="_blank" class="btn btn-primary">Ver en ${serie.channel}</a>
        </div>
    `;
}
function calcularPromedioTemporadas(datosSeries) {
    let sumatoriaTemporadas = 0;
    for (let i = 0; i < datosSeries.length; i++) {
        sumatoriaTemporadas += datosSeries[i].seasons;
    }
    const promedio = sumatoriaTemporadas / datosSeries.length;
    contenedorPromedio.innerText = `Seasons average: ${promedio.toFixed(1)}`;
}
