import './Sidebar.scss';
import {Search} from "../../icons/Search.tsx";
import {Note} from "../../icons/Note.tsx";
import {Heart} from "../../icons/Hearts/Heart.tsx";
import {Link, useLocation} from "react-router-dom";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger
} from "@radix-ui/react-dropdown-menu";
import {Settings} from "@/icons/Settings.tsx";
import {LogOut} from "@/icons/LogOut.tsx";

interface ISidebar {
    component: React.ReactNode;
    title: string;
    link: string;
}

export function Sidebar() {
    const sidebarItems: ISidebar[] = [
        {
            component: <Search/>,
            title: "Поиск",
            link: "/search",
        },
        {
            component: <Note/>,
            title: "Главная",
            link: "/",
        },
        {
            component: <Heart/>,
            title: "Моя коллекция",
            link: "/like",
        }
    ];

    const location = useLocation();
    const mainClassesLink: string = "d-flex gap-3 link-sidebar my-4";

    return (
        <nav className="sidebar p-4">
            <h3 className="fs-3">\\</h3>
            <div className="mt-4">
                {sidebarItems.map((item: ISidebar) => (
                    <Link
                        to={item.link}
                        className={location.pathname == item.link
                            ? `active ${mainClassesLink}` : mainClassesLink}
                    >
                        {item.component}
                        <span className="text-link align-items-center">{item.title}</span>
                    </Link>
                ))}
            </div>
            <div className="me">
                <div className="d-flex gap-3">

                    <div>
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <div>
                                    <img
                                        src="https://i.pinimg.com/736x/45/4e/e6/454ee61e8e8ee73efa8623c2688d22d2.jpg"
                                        alt="Аватарка пользователя"
                                        className="avatar"
                                    />
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <div className="test mx-4 p-3">
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
                                            <div className="d-flex align-items-center gap-2">
                                                <Settings/>
                                                Настройки
                                            </div>
                                        </div>
                                        <div className="mt-1 menu-item">
                                            <div className="d-flex align-items-center gap-2">
                                                <LogOut/>
                                                Выйти
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    <div>
                        <p>apathy</p>
                    </div>
                </div>
            </div>
        </nav>
    )
        ;
}