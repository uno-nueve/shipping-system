import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export type TOrder = {
    quantity: number;
    date: string;
    packaging: string;
    price: number;
    customerId: number;
    customerName: string;
    customerAddress: string;
    issuerName: string;
    _id: string;
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
            setOrders(newOrders);
        }
        fetchOrders();
    }, []);

    //TODO: Implement optimistic updates to the UI

    return (
        <div>
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
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span>
                            {order.quantity} Rosas en {order.packaging}
                        </span>
                        <hr />
                        <span>${order.price}</span>
                        <hr />
                        <span>{order.date}</span>
                        <hr />
                        <span>{order.customerName}</span>
                        <hr />
                        <span>{order.customerAddress}</span>
                        <hr />
                        <span>CUIT/CUIL: {order.customerId}</span>
                        <hr />
                        <span>EMISOR: {order.issuerName}</span>
                    </div>
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
            <Link to={'/nuevo-pedido'}>Nuevo Pedido</Link>
        </div>
    );
};