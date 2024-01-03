import React, { useState } from 'react';

export type TDropdown = {
    name: string;
    title: string;
    options: string[];
    onChange: (value: string) => void;
};

export const DropdownList = ({ name, title, options }: TDropdown) => {
    const [inputValue, setInputValue] = useState('');

    function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const value = e.target.value;
        setInputValue(value);
    }

    return (
        <>
            <label htmlFor={name}>
                {title}
                <select
                    name={name}
                    id={name}
                    value={inputValue}
                    onChange={handleChange}
                >
                    <option value='' disabled>
                        --Selecciona una opción--
                    </option>
                    {options.map((option: string) => (
                        <option value={option} key={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </label>
        </>
    );
};
