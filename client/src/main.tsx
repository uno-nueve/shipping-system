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
import { OrderDetails } from './components/OrderDetails.tsx';
import { ChakraProvider } from '@chakra-ui/react';
import { ContactDetails } from './components/ContactDetails.tsx';

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
        path: '/pedidos/:orderId',
        element: <OrderDetails />,
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
        path: 'contactos/:contactId',
        element: <ContactDetails />,
    },
    {
        path: 'archivo-pedidos',
        element: <OrdersArchiveView />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ChakraProvider>
            <RouterProvider router={router} />
        </ChakraProvider>
    </React.StrictMode>,
);
