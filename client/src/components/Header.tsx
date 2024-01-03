import { NavLink } from "react-router-dom"


export const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to={'/'}>LOGO</NavLink>
        </li>

        <li>
          <NavLink to={'/contactos'}>Contactos</NavLink>
        </li>

        <li>
          <NavLink to={'/pedidos'}>Pedidos</NavLink>
        </li>

        <li>
          <NavLink to={'/archivo-pedidos'}>Archivo</NavLink>
        </li>
      </ul>
    </div>
  )
}
