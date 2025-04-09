import { series } from './data.js';

const tablaContenido = document.getElementById("contenido-series");
const contenedorPromedio = document.getElementById("promedio-temporadas");
const contenedorDetalle = document.getElementById("serie-detalle");

let serieSeleccionada = null;

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM cargado completamente");
    inicializarTabla();
    calcularPromedioTemporadas();
    
    if (series.length > 0) {
        mostrarDetalleSerie(series[0]);
    }
});


function inicializarTabla() {
    console.log("Inicializando tabla con", series.length, "series");
    
    tablaContenido.innerHTML = '';
    
    series.forEach(serie => {
        const fila = document.createElement("tr");
        
        fila.className = "serie-fila";
        
        fila.innerHTML = `
            <td>${serie.id}</td>
            <td>${serie.name}</td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>
        `;
        
        fila.onclick = function() {
            console.log("Clic en serie:", serie.name);
            mostrarDetalleSerie(serie);
        };
        
        tablaContenido.appendChild(fila);
    });
}

function mostrarDetalleSerie(serie) {
    console.log("Mostrando detalles de:", serie.name);
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

function calcularPromedioTemporadas() {
    const sumatoriaTemporadas = series.reduce((sum, serie) => sum + serie.seasons, 0);
    const promedio = sumatoriaTemporadas / series.length;
    
    contenedorPromedio.innerText = `Seasons average: ${promedio.toFixed(1)}`;
}