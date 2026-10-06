function Header() {
  return (
    <header className="header">

      {/* Parte izquierda del encabezado */}
      <div className="header-left">

        {/* Nombre del sistema */}
        <div className="logo-text">
          <strong>Sistema</strong>
          <strong>Académico</strong>
          <strong>Unab</strong>
        </div>

      </div>

      {/* Parte derecha del encabezado */}
      <nav className="nav">

        <a href="/inscripcion-estudiante">
          Estudiante
        </a>

        <a href="/inscripcion-asignaturas">
          Asignaturas
        </a>

        <a href="#">
          Cerrar sesión
        </a>

      </nav>

    </header>
  );
}

export default Header;