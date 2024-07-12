import './Sidebar.scss';
import {Search} from "../../icons/Search.tsx";
import {Note} from "../../icons/Note.tsx";
import {Heart} from "../../icons/Heart.tsx";
import {Link, useLocation} from "react-router-dom";

export function Sidebar() {
    const sidebarItems = [
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

    return (
        <div className="sidebar p-4">
            <h3>\\</h3>
            <div className="mt-4">
                {sidebarItems.map((item) => (
                    <Link to={item.link} className={location.pathname == item.link ? "active d-flex gap-3 link-sidebar my-4" : "d-flex gap-3 link-sidebar my-4"}>
                        {item.component}
                        <span className="text-link align-items-center">{item.title}</span>
                    </Link>
                ))}
            </div>
            <div className="me">
                <div className="d-flex gap-3">
                    <div>
                        <img
                            src="https://i.pinimg.com/736x/45/4e/e6/454ee61e8e8ee73efa8623c2688d22d2.jpg"
                            alt="Аватарка пользователя"
                            className="avatar"
                        />
                    </div>
                    <div>
                        <p>apathy</p>
                    </div>
                </div>
            </div>
        </div>
    );
}