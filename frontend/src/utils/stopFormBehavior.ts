import {FormEvent} from "react";

export function stopFormBehavior(e: FormEvent) {
    e.preventDefault();
    e.stopPropagation();
}