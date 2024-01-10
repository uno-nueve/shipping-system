import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OrderForm.css';
import { TContact } from './ContactsList';

export const OrderForm = () => {
    const navigate = useNavigate();
    const [contacts, setContacts] = useState<TContact[]>([]);

    const [quantity, setQuantity] = useState('');
    const [date, setDate] = useState('');
    const [packaging, setPackaging] = useState('');
    const [price, setPrice] = useState('');
    const [issuerName, setIssuerName] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [customerId, setCustomerId] = useState('');
    const [customerAddress, setCustomerAddress] = useState('');
    const [licenseNumber, setLicenseNumber] = useState('');
    const [driverId, setDriverId] = useState('');
    const [driverName, setDriverName] = useState('');

    async function handleCreateOrder(e: React.FormEvent) {
        e.preventDefault();
        await fetch(`http://localhost:5000/pedidos`, {
            method: 'POST',
            body: JSON.stringify({
                quantity: quantity,
                date: date,
                packaging: packaging,
                price: price,
                issuerName: issuerName,
                customerName: customerName,
                customerId: customerId,
                customerAddress: customerAddress,
                licenseNumber: licenseNumber,
                driverId: driverId,
                driverName: driverName,
                _id: '',
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        navigate('/pedidos', { replace: true });
    }

    useEffect(() => {
        async function fetchContacts() {
            const response = await fetch('http://localhost:5000/contactos');
            const newContacts = await response.json();
            setContacts(newContacts);
        }
        fetchContacts();
    }, []);

    function handleContactSelect(selectedContact: TContact) {
        setCustomerName(selectedContact.name);
        setCustomerAddress(selectedContact.address);
        setCustomerId(selectedContact.fId.toString());
    }

    //TODO: Refactor code into smaller components

    return (
        <div>
            <form
                onSubmit={handleCreateOrder}
                // style={{ display: 'flex', flexDirection: 'column' }}
            >
                <div className='form-section'>
                    <label htmlFor='quantity'>
                        Cantidad:
                        <input
                            type='number'
                            id='quantity'
                            name='quantity'
                            required
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                        />
                    </label>

                    <label htmlFor='date'>
                        Fecha de envío:
                        <input
                            type='date'
                            id='date'
                            name='date'
                            required
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </label>

                    <label htmlFor='packaging'>
                        Tipo de emablaje:
                        <select
                            id='packaging'
                            name='packaging'
                            required
                            value={packaging}
                            onChange={(e) => setPackaging(e.target.value)}
                        >
                            <option value='' disabled>
                                -- Seleccionar --
                            </option>
                            <option value='maceta'>Maceta</option>
                            <option value='raiz-desnuda'>Raíz desnuda</option>
                        </select>
                    </label>

                    <label htmlFor='price'>
                        Precio:
                        <input
                            type='number'
                            id='price'
                            name='price'
                            required
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </label>

                    <label htmlFor='issuer-name'>
                        Emisor:
                        <select
                            id='issuer-name'
                            name='issuer-name'
                            required
                            value={issuerName}
                            onChange={(e) => setIssuerName(e.target.value)}
                        >
                            <option value=''>-- Seleccionar --</option>
                            <option value='Eduardo'>Eduardo</option>
                            <option value='Silvio'>Silvio</option>
                            <option value='Sergio'>Sergio</option>
                        </select>
                    </label>
                </div>

                <div className='form-section'>
                    <label htmlFor='client-name'>
                        Nombre y Apellido:
                        {/* <input
                            type='text'
                            id='client-name'
                            name='client-name'
                            required
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
                        /> */}
                        <input
                            list='clients-names'
                            id='client-name'
                            name='client-name'
                            onChange={(e) => {
                                const selectedContact = contacts.find(
                                    (contact) =>
                                        contact.name === e.target.value,
                                );
                                if (selectedContact) {
                                    handleContactSelect(selectedContact);
                                } else {
                                    setCustomerName(e.target.value);
                                }
                            }}
                        />
                        <datalist id='clients-names'>
                            {contacts.map((contact) => (
                                <option
                                    key={contact._id}
                                    value={contact.name}
                                ></option>
                            ))}
                        </datalist>
                    </label>

                    <label htmlFor='cuit-cuil'>
                        CUIT/CUIL:
                        <input
                            type='number'
                            id='cuit-cuil'
                            name='cuit-cuil'
                            required
                            value={customerId}
                            onChange={(e) => setCustomerId(e.target.value)}
                        />
                    </label>

                    <label htmlFor='address'>
                        Dirección:
                        <input
                            type='text'
                            id='address'
                            name='address'
                            required
                            value={customerAddress}
                            onChange={(e) => setCustomerAddress(e.target.value)}
                        />
                    </label>
                </div>

                <div className='form-section'>
                    <label htmlFor='license-number'>
                        Patente transporte:
                        <input
                            type='number'
                            id='license-number'
                            name='license-number'
                            value={licenseNumber}
                            onChange={(e) => setLicenseNumber(e.target.value)}
                        />
                    </label>

                    <label htmlFor='driver-id'>
                        DNI Conductor:
                        <input
                            type='number'
                            id='driver-id'
                            name='driver-id'
                            value={driverId}
                            onChange={(e) => setDriverId(e.target.value)}
                        />
                    </label>

                    <label htmlFor='driver-name'>
                        Nombre Conductor:
                        <input
                            type='text'
                            id='driver-name'
                            name='driver-name'
                            value={driverName}
                            onChange={(e) => setDriverName(e.target.value)}
                        />
                    </label>
                </div>

                <button type='submit'>Continuar</button>
            </form>
        </div>
    );
};
