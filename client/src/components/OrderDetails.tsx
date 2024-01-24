import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TOrder } from './OrdersList';
import './OrderWidget.css';

export const OrderDetails = () => {
    const [orderDetails, setOrderDetails] = useState<TOrder | undefined>();
    const { orderId } = useParams();

    useEffect(() => {
        async function fetchOrderDetails() {
            if (orderId) {
                try {
                    const response = await fetch(
                        `http://localhost:5000/pedidos/${orderId}`,
                    );
                    if (!response.ok) {
                        throw new Error('Failed to fetch order details');
                    }
                    const newOrder = await response.json();
                    setOrderDetails(newOrder);
                } catch (error) {
                    console.error('Error fetching order details:', error);
                }
            }
        }
        fetchOrderDetails();
    }, [orderId]);
    return (
        <div>
            <h3>
                {orderDetails?.quantity} Rosas{' '}
                {orderDetails?.packaging === 'maceta'
                    ? 'en maceta'
                    : 'A raíz desnuda'}
            </h3>
            <h3>A enviar el {orderDetails?.date}</h3>
            <h3>Para {orderDetails?.customer.name}</h3>
            <h3>Emite {orderDetails?.issuerName}</h3>
        </div>
    );
};
