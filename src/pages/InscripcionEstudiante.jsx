// useState permite guardar información dentro del componente
import { useState } from "react";

// useNavigate permite cambiar de página
import { useNavigate } from "react-router-dom";

// Importamos nuestros componentes
import Header from "../components/Header";
import Button from "../components/Button";
import Footer from "../components/Footer";

function InscripcionEstudiante() {

  // Permite navegar entre las páginas
  const navigate = useNavigate();

  // Información del estudiante
  const [estudiante, setEstudiante] = useState({
    rut: "",
    nombre: "",
    apellido: "",
    fechaNacimiento: "",
    correo: "",
    telefono: "",
    direccion: "",
    carrera: "",
    jornada: ""
  });

  // Indica si el estudiante ya fue registrado
  const [registrado, setRegistrado] = useState(false);

  // Guarda los campos que estén vacíos
  const [error, setError] = useState("");

  // Esta función se ejecuta cada vez que escribimos
  // algo en un campo del formulario
  const manejarCambio = (event) => {

    // Obtenemos el nombre y valor del campo
    const { name, value } = event.target;

    // Actualizamos solamente ese campo
    setEstudiante({
      ...estudiante,
      [name]: value
    });
  };

  // Se ejecuta cuando presionamos "Registrar inscripción"
  const manejarRegistro = (event) => {

    // Evita que el formulario recargue la página
    event.preventDefault();

    // Revisamos si existen campos vacíos
    const camposVacios = Object.entries(estudiante)
      .filter(([_, value]) => value.trim() === "")
      .map(([campo]) => campo);

    // Si existen campos vacíos mostramos un mensaje
    if (camposVacios.length > 0) {

      setError(
        "Debe completar todos los campos antes de registrar la inscripción."
      );

      return;
    }

    // Si todos los campos están completos,
    // quitamos el mensaje de error
    setError("");

    // Cambiamos el estado a registrado
    setRegistrado(true);
  };

  // Lleva al estudiante a la página de asignaturas
  const irAAsignaturas = () => {
    navigate("/inscripcion-asignaturas");
  };

  return (
    <div>

      {/* Encabezado */}
      <Header />

      {/* Contenido principal */}
      <main className="container">

        <h1>Inscripción del Estudiante</h1>

        <p className="descripcion">
          Complete la información del estudiante para realizar su inscripción.
        </p>

        {/* Si todavía no está registrado mostramos el formulario */}
        {!registrado ? (

          <form
            className="student-form"
            onSubmit={manejarRegistro}
          >

            <h2>Información personal</h2>

            {/* RUT */}
            <label>
              RUT
            </label>

            <input
              type="text"
              name="rut"
              value={estudiante.rut}
              onChange={manejarCambio}
              placeholder="Ej: 12.345.678-9"
            />

            {/* Nombre */}
            <label>
              Nombre
            </label>

            <input
              type="text"
              name="nombre"
              value={estudiante.nombre}
              onChange={manejarCambio}
              placeholder="Ingrese su nombre"
            />

            {/* Apellido */}
            <label>
              Apellido
            </label>

            <input
              type="text"
              name="apellido"
              value={estudiante.apellido}
              onChange={manejarCambio}
              placeholder="Ingrese su apellido"
            />

            {/* Fecha de nacimiento */}
            <label>
              Fecha de nacimiento
            </label>

            <input
              type="date"
              name="fechaNacimiento"
              value={estudiante.fechaNacimiento}
              onChange={manejarCambio}
            />

            {/* Correo */}
            <label>
              Correo electrónico
            </label>

            <input
              type="email"
              name="correo"
              value={estudiante.correo}
              onChange={manejarCambio}
              placeholder="correo@ejemplo.com"
            />

            {/* Teléfono */}
            <label>
              Teléfono
            </label>

            <input
              type="text"
              name="telefono"
              value={estudiante.telefono}
              onChange={manejarCambio}
              placeholder="Ej: +56 9 1234 5678"
            />

            {/* Dirección */}
            <label>
              Dirección
            </label>

            <input
              type="text"
              name="direccion"
              value={estudiante.direccion}
              onChange={manejarCambio}
              placeholder="Ingrese su dirección"
            />

            {/* Carrera */}
            <label>
              Carrera
            </label>

            <select
              name="carrera"
              value={estudiante.carrera}
              onChange={manejarCambio}
            >

              <option value="">
                Seleccione una carrera
              </option>

              <option value="Ingeniería en Informática">
                Ingeniería en Informática
              </option>

              <option value="Ingeniería Industrial">
                Ingeniería Industrial
              </option>

              <option value="Administración">
                Administración
              </option>

            </select>

            {/* Jornada */}
            <label>
              Jornada
            </label>

            <select
              name="jornada"
              value={estudiante.jornada}
              onChange={manejarCambio}
            >

              <option value="">
                Seleccione una jornada
              </option>

              <option value="Diurna">
                Diurna
              </option>

              <option value="Vespertina">
                Vespertina
              </option>

              <option value="Online">
                Online
              </option>

            </select>

            {/* Mensaje de error */}
            {error && (
              <p className="error">
                {error}
              </p>
            )}

            {/* Botón de envío */}
            <Button>
              Registrar inscripción
            </Button>

          </form>

        ) : (

          /* Si está registrado mostramos sus datos */
          <section className="registro-exitoso">

            <h2>Inscripción registrada</h2>

            <p>
              Los datos del estudiante fueron registrados correctamente.
            </p>

            <div className="datos-estudiante">

              <p>
                <strong>RUT:</strong> {estudiante.rut}
              </p>

              <p>
                <strong>Nombre:</strong> {estudiante.nombre}
              </p>

              <p>
                <strong>Apellido:</strong> {estudiante.apellido}
              </p>

              <p>
                <strong>Fecha de nacimiento:</strong>{" "}
                {estudiante.fechaNacimiento}
              </p>

              <p>
                <strong>Correo:</strong> {estudiante.correo}
              </p>

              <p>
                <strong>Teléfono:</strong> {estudiante.telefono}
              </p>

              <p>
                <strong>Dirección:</strong> {estudiante.direccion}
              </p>

              <p>
                <strong>Carrera:</strong> {estudiante.carrera}
              </p>

              <p>
                <strong>Jornada:</strong> {estudiante.jornada}
              </p>

            </div>

            {/* Botón para continuar */}
            <Button onClick={irAAsignaturas}>
              Inscribir asignaturas
            </Button>

          </section>

        )}

      </main>

      <Footer />

    </div>
  );
}

export default InscripcionEstudiante;