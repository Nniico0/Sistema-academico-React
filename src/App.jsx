// Importamos las herramientas necesarias de React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importamos nuestras páginas
import InscripcionEstudiante from "./pages/InscripcionEstudiante";
import InscripcionAsignaturas from "./pages/InscripcionAsignaturas";

function App() {
  return (
    // BrowserRouter permite manejar diferentes páginas dentro de React
    <BrowserRouter>

      {/* Routes contiene todas las rutas de nuestra aplicación */}
      <Routes>

        {/* Página de inscripción del estudiante */}
        <Route
          path="/inscripcion-estudiante"
          element={<InscripcionEstudiante />}
        />

        {/* Página de inscripción de asignaturas */}
        <Route
          path="/inscripcion-asignaturas"
          element={<InscripcionAsignaturas />}
        />

      </Routes>

    </BrowserRouter>
  );
}

// Exportamos App para utilizarlo desde main.jsx
export default App;