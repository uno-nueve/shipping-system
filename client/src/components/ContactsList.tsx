import { useEffect, useState } from 'react';

export type TContact = {
    name: string;
    fId: number;
    address: string;
    _id: string;
};

export const ContactsList = () => {
    const [contacts, setContacts] = useState<TContact[]>([]);

    useEffect(() => {
        async function fetchContacts() {
            const response = await fetch('http://localhost:5000/contactos');
            const newContacts = await response.json();
            setContacts(newContacts);
        }
        fetchContacts();
    }, []);

    function hanldeDeleteContact(contactId: string) {
        fetch(`http://localhost:5000/contactos/${contactId}`, {
            method: 'DELETE',
        });
    }

    return (
        <div>
            <ul>
                {contacts.map((contact) => (
                    <li key={contact._id}>
                        <span>{contact.name}</span>
                        <hr />
                        <span>CUIT/CUIL: {contact.fId}</span>
                        <hr />
                        <span>Dirección: {contact.address}</span>
                        <button
                            onClick={() => hanldeDeleteContact(contact._id)}
                        >
                            x
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
