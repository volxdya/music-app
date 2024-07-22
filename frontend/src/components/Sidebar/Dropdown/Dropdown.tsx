import {Settings} from "@/icons/Settings.tsx";
import {LogOut} from "@/icons/LogOut.tsx";
import './SidebarDropdown.scss';
import {ISidebar} from "@/types/ISidebar.ts";
import {Dropdown} from "@/components/Dropdown/Dropdown.tsx";


export function SidebarDropdown() {
    const dropdownItems: ISidebar[] = [
        {
            title: "Настройки",
            component: <Settings/>
        },
        {
            title: "Выйти",
            component: <LogOut/>
        }
    ];

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
                            {dropdownItems.map((item: ISidebar) => (
                                <div className="mt-1 menu-item">
                                    <div className="d-flex align-items-center gap-3">
                                        {item.component}
                                        {item.title}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                }
            />

    );
}