import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TOrder } from './OrdersList';
import { OrderWidget } from './OrderWidget';

export type TContact = {
    name: string;
    fId: number;
    address: string;
    orders: [];
    _id: string;
};

export const ContactsList = () => {
    const [contacts, setContacts] = useState<TContact[]>([]);
    const [orders, setOrders] = useState<TOrder[]>([]);

    useEffect(() => {
        async function fetchContacts() {
            const response = await fetch('http://localhost:5000/contactos');
            const newContacts = await response.json();
            setContacts(newContacts);
        }
        async function fetchOrders() {
            const response = await fetch('http://localhost:5000/pedidos');
            const newOrders = await response.json();
            setOrders(newOrders);
        }
        fetchContacts();
        fetchOrders();
    }, []);

    function hanldeDeleteContact(contactId: string) {
        fetch(`http://localhost:5000/contactos/${contactId}`, {
            method: 'DELETE',
        });
    }

    return (
        <div>
            {contacts.length === 0 ? (
                <h1>No tienes contactos</h1>
            ) : (
                <ul>
                    {contacts.map((contact) => (
                        <li key={contact._id}>
                            <Link to={`/contactos/${contact._id}`}>
                                <span>{contact.name}</span>
                            </Link>
                            <hr />
                            <span>CUIT/CUIL: {contact.fId}</span>
                            <hr />
                            <span>Dirección: {contact.address}</span>
                            <hr />
                            <details>
                                <summary>
                                    {contact.orders.length > 1 ? (
                                        <>{contact.orders.length} Ordenes:</>
                                    ) : (
                                        <>{contact.orders.length} Orden:</>
                                    )}
                                </summary>
                                <ol>
                                    {orders.map((order) => {
                                        if (
                                            contact.orders.some(
                                                (orderId) =>
                                                    order._id === orderId,
                                            )
                                        ) {
                                            return (
                                                <li key={order._id}>
                                                    <OrderWidget
                                                        quantity={
                                                            order.quantity
                                                        }
                                                        date={order.date}
                                                        packaging={
                                                            order.packaging
                                                        }
                                                        price={order.price}
                                                        issuer={
                                                            order.issuerName
                                                        }
                                                    />
                                                    <Link
                                                        to={`/pedidos/${order._id}`}
                                                    ></Link>
                                                </li>
                                            );
                                        }
                                    })}
                                </ol>
                            </details>
                            <button
                                onClick={() => hanldeDeleteContact(contact._id)}
                            >
                                x
                            </button>
                        </li>
                    ))}
                </ul>
            )}
            <Link to={'/dashboard'}>Volver</Link>
        </div>
    );
};
