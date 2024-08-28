import {ChangeEvent} from "react";

// Фабрика фуккций, для меньшей писанины `const handleChange = (e: ChangeEvent<HTMLInputElement>) => {...}
export const onChange = (fn: (value: string) => void) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const value = e.target.value;
    fn(value);
}