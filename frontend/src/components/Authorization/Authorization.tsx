import './Authorization.scss';
import {MainTitle} from "@/ui/Text/MainTitle/MainTitle.tsx";
import {Link} from "react-router-dom";
import {useState} from "react";
import {onChange} from "@/utils/onChange.ts";
import {useAuth} from "@/hooks/useAuth.ts";
import {Spinner} from "@/ui/Spinner/Spinner.tsx";

export function Authorization() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const {handleSubmit, isSuccess, isLoading} = useAuth();

    return (
        <form className="form-auth" onSubmit={(e) => handleSubmit(e, login, password)}>
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
                                {isLoading ? (
                                    <button disabled><Spinner/></button>
                                ): (
                                    <button disabled={isSuccess}>Войти</button>
                                )}
                                <Link to="/register">
                                    <button className="create-id-btn">Создать ID</button>
                                </Link>
                                <Link to="/register">
                                    <button className="i-author">Я исполнитель</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}