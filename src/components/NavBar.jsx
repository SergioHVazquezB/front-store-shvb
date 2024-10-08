import { NavLink } from "react-router-dom"


const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Tiendota</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">          
          <NavLink className="nav-link active" to="/">Inicio</NavLink>
        </li>
        <li className="nav-item">          
          <NavLink className="nav-link" to="/catalogo">Catalogo</NavLink>
        </li>
        <li className="nav-item">          
          <NavLink className="nav-link" to="/carrito">Carrito</NavLink>
        </li>  
        <li className="nav-item">     
          <NavLink className="nav-link" to="/usuario">Usuarios</NavLink>
        </li>       
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default NavBar
