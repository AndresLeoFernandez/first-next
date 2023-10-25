import Link from "next/link";
import Image from 'next/image'
import Login from "./Login";
export default function Navegacion() {
  return (
    <>
      <Login/>
      <nav className="navbar sticky-top navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div className="container-fluid justify-content-between">
          <Link className="navbar-brand" href="/"><Image className="p-2" src="/logo.png" alt="Logo" width={80} height={80} priority />Proyectos Colaborativos</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              {/*<li className="nav-item">
                <Link className="nav-link active" href="/">Inicio
                  <span className="visually-hidden">(current)</span>
                </Link>
              </li>*/}
              <li className="nav-item">
                <Link className="nav-link" href="/endpoint">Api</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/contacto">Contacto</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/nosotros">Conocenos</Link>
              </li>


            </ul>
            {/*<button type="button" className="btn btn-secondary m-1">Iniciar sesión</button>*/}
            <button type="button" className="btn btn-secondary m-1" data-bs-toggle="modal" data-bs-target="#exampleModal">Iniciar sesión</button>
            <Link href="/auth/login">Inicio</Link>
            {/*<button type="button" className="btn btn-success m-1">Registrate</button>*/}
          </div>
        </div>
      </nav>
    </>
  )
}
