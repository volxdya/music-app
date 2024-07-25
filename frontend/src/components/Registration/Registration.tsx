import {MainTitle} from "@/ui/Text/MainTitle/MainTitle.tsx";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {onChange} from "@/utils/onChange.ts";
import {useRegister} from "@/hooks/useRegister.ts";
import {Spinner} from "@/ui/Spinner/Spinner.tsx";

export function Registration() {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFisrtName] = useState("");
    const [lastName, setLastName] = useState("");

    const {
        handleSubmit,
        isSuccess,
        isLoading
    } = useRegister();

    return (
        <form className="form-auth" onSubmit={(e) => handleSubmit(e, login, password, firstName, lastName)}>
            <div className="form-group">
                <div className="mt-4">
                    <div className="d-flex justify-content-center">
                        <MainTitle/>
                    </div>
                    <h2 className="mt-3 text-auth text-center">Остался один шаг до музыки</h2>

                    <div className="mt-4 inputs-container">
                        <div>
                            <input placeholder="Логин" className="mt-3" type="text" onChange={onChange(setLogin)}/>
                            <input placeholder="Имя" className="mt-3" type="text" onChange={onChange(setFisrtName)}/>
                            <input placeholder="Фамилия" className="mt-3" type="text" onChange={onChange(setLastName)}/>
                            <input placeholder="Пароль" className="mt-3" type="password"
                                   onChange={onChange(setPassword)}/>
                            <div className="mt-4">
                                {isLoading ? (
                                    <button disabled><Spinner/></button>
                                ): (
                                    <button disabled={isSuccess}>Продолжить</button>
                                )}
                                <Link to="/auth">
                                    <button className="create-id-btn">У меня есть аккаунт</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}