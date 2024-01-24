import { useEffect, useState } from 'react';
import { TContact } from './ContactsList';
import { useParams } from 'react-router-dom';

export const ContactDetails = () => {
    const [contactDetails, setContactDetails] = useState<TContact | undefined>();
    const { contactId } = useParams();

    useEffect(() => {
        async function fetchContactDetails() {
            if (!contactId) return;
            const response = await fetch(`http://localhost:5000/contactos/${contactId}`);
            const newContact = await response.json();
            setContactDetails(newContact);
        }
        fetchContactDetails();
    }, [contactId]);

    return (
        <div>
            <h1>{contactDetails?.name}</h1>
        </div>
    );
};
