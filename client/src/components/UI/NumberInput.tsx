import React, { useState } from 'react';

type TInput = {
    name: string;
    title: string;
    onChange: (value: string) => void;
};

export const NumberInput = ({ name, title }: TInput) => {
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
                    type='number'
                    name={name}
                    id={name}
                    value={inputValue}
                    onChange={handleChange}
                    required
                />
            </label>
        </>
    );
};
