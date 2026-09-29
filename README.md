# Catálogo de Series — Taller 2 de TypeScript

Página web que muestra un catálogo de series de televisión escrito en **TypeScript**. Al hacer clic en una serie de la tabla se despliega su ficha (imagen, descripción y enlace al canal), y al pie de la tabla se calcula el promedio de temporadas.

## Qué demuestra

- Modelado de datos con una clase tipada (`Serie`) y un arreglo de 12 series.
- Manipulación del DOM con tipos (`HTMLElement`) y eventos de clic.
- Módulos ES (`import` / `export`) compilados con `tsc`.
- Maquetación con Bootstrap 4.

## Cómo ejecutarlo

Necesita servir los archivos por HTTP (los módulos ES no cargan desde `file://`):

```bash
git clone https://github.com/Alejob12/Taller2-Typescript.git
cd Taller2-Typescript
python3 -m http.server 8000
```

Abre `http://localhost:8000`. Bootstrap se carga desde un CDN, así que se necesita conexión a internet.

Para modificar el código, edita los `.ts` y recompila:

```bash
npm install -g typescript
tsc -p .            # genera los .js en scripts/
```

## Estructura

```
Serie.ts     Clase Serie
data.ts      Datos de las 12 series
main.ts      Tabla, ficha de detalle y promedio de temporadas
scripts/     JavaScript compilado (lo que carga index.html)
images/      Imágenes locales de algunas series
index.html · style.css
```

## Autor

**Alejandro Bernal** — Ingeniería de Sistemas e Industrial, Universidad de los Andes.
