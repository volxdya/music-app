import {Settings} from "@/icons/Settings.tsx";
import {LogOut} from "@/icons/LogOut.tsx";
import './SidebarDropdown.scss';
import {Dropdown} from "@/components/Dropdown/Dropdown.tsx";
import {Link} from "react-router-dom";


export function SidebarDropdown() {

    return (

        <Dropdown
            trigger={
                <div>
                    <img
                        src="https://i.pinimg.com/736x/45/4e/e6/454ee61e8e8ee73efa8623c2688d22d2.jpg"
                        alt="Аватарка пользователя"
                        className="avatar"
                    />
                </div>
            }

            content={
                <>
                    <div className="d-flex justify-content-center mt-2">
                        <img
                            src="https://i.pinimg.com/736x/45/4e/e6/454ee61e8e8ee73efa8623c2688d22d2.jpg"
                            alt="Аватарка пользователя"
                            className="avatar"
                        />
                    </div>
                    <div className="mt-2">
                        <p className="text-center">apathy</p>
                        <p className="text-center name-user">Владимир Тестов</p>
                    </div>
                    <div className="mt-4">
                        <div className="mt-1 menu-item">
                            <div className="d-flex align-items-center gap-3">
                                <Settings/>
                                Настройки
                            </div>
                        </div>
                        <Link to="/auth">
                            <div className="mt-1 menu-item">
                                <div className="d-flex align-items-center gap-3">
                                    <LogOut/>
                                    Выйти
                                </div>
                            </div>
                        </Link>
                    </div>
                </>
            }
        />

    );
}