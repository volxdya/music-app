import './Sidebar.scss';
import {Search} from "../../icons/Search.tsx";
import {Note} from "../../icons/Note.tsx";
import {Heart} from "../../icons/Hearts/Heart.tsx";
import {Link, useLocation} from "react-router-dom";
import {MainTitle} from "@/ui/Text/MainTitle/MainTitle.tsx";
import {SidebarDropdown} from "@/components/Sidebar/Dropdown/Dropdown.tsx";

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
            <MainTitle/>
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
                    <SidebarDropdown/>
                    <div>
                        <p>apathy</p>
                    </div>
                </div>
            </div>
        </nav>
    );
}