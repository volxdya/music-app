import "./Sidebar.scss";
import { Search } from "../../icons/Search.tsx";
import { Note } from "../../icons/Note.tsx";
import { Heart } from "../../icons/Hearts/Heart.tsx";
import { Link, useLocation } from "react-router-dom";
import { MainTitle } from "@/ui/Text/MainTitle/MainTitle.tsx";
import { SidebarDropdown } from "@/components/Sidebar/Dropdown/Dropdown.tsx";
import uniqid from "uniqid";
import { observer } from "mobx-react-lite";
import user from "@/store/user.ts";
import { getItem } from "@/utils/localStorage.ts";
import { useEffect } from "react";
import plus from "@/store/plus.ts";

interface ISidebar {
  component: React.ReactNode;
  title: string;
  link: string;
}

export const Sidebar = observer(() => {
  const sidebarItems: ISidebar[] = [
    {
      component: <Search />,
      title: "Поиск",
      link: "/search",
    },
    {
      component: <Note />,
      title: "Главная",
      link: "/",
    },
    {
      component: <Heart />,
      title: "Моя коллекция",
      link: "/collection",
    },
  ];

  const location = useLocation();
  const mainClassesLink: string = "flex gap-3 link-sidebar my-4";

  useEffect(() => {
    user.getUserData();
    user.getMe();
  }, []);

  return (
    <nav className="sidebar p-4">
      <MainTitle />
      <div className="mt-4">
        {sidebarItems.map((item: ISidebar) => (
          <Link
            key={uniqid()}
            to={item.link}
            className={
              location.pathname == item.link
                ? `active ${mainClassesLink}`
                : mainClassesLink
            }
          >
            {item.component}
            <span className="text-link align-items-center">{item.title}</span>
          </Link>
        ))}
      </div>
      <div className="me">
        {getItem("token") ? (
          <div className="flex gap-3">
            <SidebarDropdown
              login={user.me.login}
              firstName={user.me.firstName}
              lastName={user.me.lastName}
            />
            <div className="user-data-block">
              <div>
                <p>{user.me.login}</p>
                {!user.userData.isUser ? (
                  <div className="author-block mt-1">Исполнитель</div>
                ) : (
                  <Link to={`/plus/${plus.current}`}>
                    <div className="author-block flex gap-2 mt-1">
                      Слушатель
                      {user.me.isSubscribed && <span>+</span>}
                    </div>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ) : (
          <Link to="/auth" className="w-100">
            <button className="btn-auth w-100">Войти</button>
          </Link>
        )}
      </div>
    </nav>
  );
});
