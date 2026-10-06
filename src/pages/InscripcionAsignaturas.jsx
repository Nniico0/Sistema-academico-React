import { useState } from "react";

import Header from "../components/Header";
import Button from "../components/Button";
import Footer from "../components/Footer";

function InscripcionAsignaturas() {

  // Lista de asignaturas disponibles
  const [asignaturas, setAsignaturas] = useState([
    {
      id: 1,
      nombre: "Programación II",
      docente: "Juan Soto",
      horario: "Lunes 10:00 - 12:00",
      cupos: 15
    },

    {
      id: 2,
      nombre: "Base de Datos",
      docente: "María Pérez",
      horario: "Martes 14:00 - 16:00",
      cupos: 8
    },

    {
      id: 3,
      nombre: "Ingeniería de Software",
      docente: "Pedro González",
      horario: "Miércoles 09:00 - 11:00",
      cupos: 12
    },

    {
      id: 4,
      nombre: "Desarrollo Web",
      docente: "Ana Martínez",
      horario: "Jueves 15:00 - 17:00",
      cupos: 10
    }
  ]);

  // Guarda las asignaturas que el estudiante seleccionó
  const [inscritas, setInscritas] = useState([]);

  // Función para inscribir una asignatura
  const inscribirAsignatura = (asignatura) => {

    // Revisamos si ya está inscrita
    const yaInscrita = inscritas.some(
      (item) => item.id === asignatura.id
    );

    // Si ya está inscrita, no hacemos nada
    if (yaInscrita) {
      return;
    }

    // Agregamos la asignatura a la lista de inscritas
    setInscritas([
      ...inscritas,
      asignatura
    ]);

    // Disminuimos el número de cupos disponibles
    setAsignaturas(
      asignaturas.map((item) => {

        if (item.id === asignatura.id) {

          return {
            ...item,
            cupos: item.cupos - 1
          };

        }

        return item;

      })
    );
  };

  return (
    <div>

      {/* Encabezado */}
      <Header />

      <main className="container">

        <h1>Inscripción de Asignaturas</h1>

        <p className="descripcion">
          Seleccione las asignaturas que desea cursar durante el período académico.
        </p>

        {/* Lista de asignaturas */}
        <section>

          <h2>Asignaturas disponibles</h2>

          <div className="asignaturas">

            {asignaturas.map((asignatura) => {

              // Revisamos si ya fue inscrita
              const yaInscrita = inscritas.some(
                (item) => item.id === asignatura.id
              );

              return (

                <article
                  className="asignatura"
                  key={asignatura.id}
                >

                  <h3>
                    {asignatura.nombre}
                  </h3>

                  <p>
                    <strong>Docente:</strong>{" "}
                    {asignatura.docente}
                  </p>

                  <p>
                    <strong>Horario:</strong>{" "}
                    {asignatura.horario}
                  </p>

                  <p>
                    <strong>Cupos disponibles:</strong>{" "}
                    {asignatura.cupos}
                  </p>

                  <Button
                    onClick={() => inscribirAsignatura(asignatura)}
                  >
                    {yaInscrita
                      ? "Asignatura inscrita"
                      : "Inscribir asignatura"}
                  </Button>

                </article>

              );

            })}

          </div>

        </section>

        {/* Asignaturas inscritas */}
        <section className="inscritas">

          <h2>
            Mis asignaturas
          </h2>

          {inscritas.length === 0 ? (

            <p>
              Todavía no has inscrito asignaturas.
            </p>

          ) : (

            <ul>

              {inscritas.map((asignatura) => (

                <li key={asignatura.id}>

                  <strong>
                    {asignatura.nombre}
                  </strong>

                  {" - "}

                  {asignatura.horario}

                </li>

              ))}

            </ul>

          )}

        </section>

      </main>

      <Footer />

    </div>
  );
}

export default InscripcionAsignaturas;