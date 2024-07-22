import './Authorization.scss';
import {MainTitle} from "@/ui/Text/MainTitle/MainTitle.tsx";

export function Authorization() {
    return (
        <form className="form-auth">
            <div className="form-group">
                <div className="mt-4">
                    <div className="d-flex justify-content-center">
                        <MainTitle/>
                    </div>
                    <h2 className="mt-3 text-auth text-center">Остался один шаг до музыки</h2>

                    <div className="mt-4 inputs-container">
                        <div>
                            <input placeholder="Логин" className="mt-3" type="text"/>
                            <input placeholder="Пароль" className="mt-3" type="password"/>
                            <div className="mt-4">
                                <button>Войти</button>
                                <button className="create-id-btn">Создать ID</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}