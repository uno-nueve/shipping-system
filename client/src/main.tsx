import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { DashboardView } from './pages/DashboardView.tsx';
import { OrdersListView } from './pages/OrdersListView.tsx';
import { OrderFormView } from './pages/OrderFormView.tsx';
import { ContactsListView } from './pages/ContactsListView.tsx';
import { OrdersArchiveView } from './pages/OrdersArchiveView.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/dashboard',
        element: <DashboardView />,
    },
    {
        path: '/pedidos',
        element: <OrdersListView />,
    },
    {
        path: '/nuevo-pedido',
        element: <OrderFormView />,
    },
    {
        path: '/contactos',
        element: <ContactsListView />,
    },
    {
        path: 'archivo-pedidos',
        element: <OrdersArchiveView />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
