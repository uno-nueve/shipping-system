import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (
        <div
            style={{
                width: '1000px',
                height: '40px',
                background: '#fbfbfb',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <ul
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '70%',
                }}
            >
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
    );
};
