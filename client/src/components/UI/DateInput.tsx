import React, { useState } from 'react';

type TInput = {
    name: string;
    title: string;
    onChange: (value: string) => void;
};

export const DateInput = ({ name, title }: TInput) => {
    const [inputValue, setInputValue] = useState('');

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setInputValue(value);
    }

    return (
        <>
            <label htmlFor={name}>
                {title}
                <input
                    type='date'
                    name={name}
                    id={name}
                    value={inputValue}
                    onChange={handleChange}
                />
            </label>
        </>
    );
};
