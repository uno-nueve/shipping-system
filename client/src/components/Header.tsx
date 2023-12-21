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
          <NavLink to={'/pedido'}>Nuevo Pedido</NavLink>
        </li>
      </ul>
    </div>
  )
}
