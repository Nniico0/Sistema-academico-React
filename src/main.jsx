// Importamos React
import React from "react";

// Importamos ReactDOM para poder mostrar nuestra aplicación
import ReactDOM from "react-dom/client";

// Importamos el componente principal
import App from "./App";

// Importamos los estilos generales
import "./index.css";

// Buscamos el elemento "root" que está en index.html
// y dentro de él mostramos nuestra aplicación React
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);