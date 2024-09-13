import { ChangeEvent } from "react";

export interface IFormInput {
    placeholder: string;
    type: string;
    onChangeFn: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    classNames: string;
}