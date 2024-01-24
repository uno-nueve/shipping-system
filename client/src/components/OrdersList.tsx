import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export type TOrder = {
    quantity: number;
    date: string;
    packaging: string;
    price: number;
    customer: TCustomer;
    issuerName: string;
    _id: string;
};

export type TCustomer = {
    name: string;
    fId: number;
    address: string;
};

export const OrderList = () => {
    const [orders, setOrders] = useState<TOrder[]>([]);

    async function handleDeleteOrder(orderId: string) {
        fetch(`http://localhost:5000/pedidos/${orderId}`, {
            method: 'DELETE',
        });
    }

    useEffect(() => {
        async function fetchOrders() {
            const response = await fetch(`http://localhost:5000/pedidos`);
            const newOrders = await response.json();
            console.log(newOrders);
            setOrders(newOrders);
        }
        fetchOrders();
    }, []);

    //TODO: Implement optimistic updates to the UI

    return (
        <div>
            {orders.length === 0 ? (
                <h1>No hay pedidos</h1>
            ) : (
                <>
                    {orders.map((order) => (
                        <li
                            key={order._id}
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-around',
                                background: 'white',
                                width: '300px',
                                color: 'black',
                                borderRadius: '20px',
                                padding: '10px',
                                marginBottom: '15px',
                                position: 'relative',
                            }}
                        >
                            <Link to={`/pedidos/${order._id}`}>
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                    }}
                                >
                                    <span>
                                        {order.quantity} Rosas en{' '}
                                        {order.packaging}
                                    </span>
                                    <hr />
                                    <span>${order.price}</span>
                                    <hr />
                                    <span>{order.date}</span>
                                    <hr />
                                    <span>{order.customer.name}</span>
                                    <hr />
                                    <span>{order.customer.address}</span>
                                    <hr />
                                    <span>CUIT/CUIL: {order.customer.fId}</span>
                                    <hr />
                                    <span>EMISOR: {order.issuerName}</span>
                                </div>
                            </Link>
                            <button
                                onClick={() => handleDeleteOrder(order._id)}
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    position: 'absolute',
                                    top: '10px',
                                    right: '10px',
                                    borderRadius: '15px',
                                }}
                            >
                                X
                            </button>
                        </li>
                    ))}
                </>
            )}
            <Link to={'/dashboard'}>Volver</Link>
            <Link to={'/nuevo-pedido'}>
                {orders.length !== 0 ? 'Nuevo Pedido' : 'Haz un pedido'}
            </Link>
        </div>
    );
};
