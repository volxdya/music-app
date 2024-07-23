import './Authorization.scss';
import {MainTitle} from "@/ui/Text/MainTitle/MainTitle.tsx";
import {Link} from "react-router-dom";
import {FormEvent, useState} from "react";
import {onChange} from "@/utils/onChange.ts";
import axios from 'axios';
import {getItem, setItem} from "@/utils/localStorage.ts";

export function Authorization() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        await axios.post(`http://localhost:3010/auth/login`, {
            login: login,
            password: password,
            isUser: true
        }).then((res) => {
            setItem("token", res.data.token);

            console.log(getItem("token"));
        }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <form className="form-auth" onSubmit={handleSubmit}>
            <div className="form-group">
                <div className="mt-4">
                    <div className="d-flex justify-content-center">
                        <MainTitle/>
                    </div>
                    <h2 className="mt-3 text-auth text-center">Остался один шаг до музыки</h2>

                    <div className="mt-4 inputs-container">
                        <div>
                            <input placeholder="Логин" className="mt-3" type="text" onChange={onChange(setLogin)}/>
                            <input placeholder="Пароль" className="mt-3" type="password"
                                   onChange={onChange(setPassword)}/>
                            <div className="mt-4">
                                <button>Войти</button>
                                <Link to="/register">
                                    <button className="create-id-btn">Создать ID</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}