import {FormEvent} from "react";

// Функций, убирающая дефолтное поведение формы
export function stopFormBehavior(e: FormEvent) {
    e.preventDefault();
    e.stopPropagation();
}