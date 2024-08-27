import { Settings } from "@/icons/Settings.tsx";
import { LogOut } from "@/icons/LogOut.tsx";
import { Dropdown } from "@/components/Dropdown/Dropdown.tsx";
import { AppIcon } from "@/icons/AppIcon.tsx";
import { PersonAdd } from "@/icons/Person/PersonAdd.tsx";
import { Link } from "react-router-dom";
import { logOut } from "@/utils/logOut.ts";

interface Props {
  login: string;
  firstName: string;
  lastName: string;
}

export function SidebarDropdown({ login, firstName, lastName }: Props) {
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
          <div className="flex justify-center mt-2">
            <img
              src="https://i.pinimg.com/736x/45/4e/e6/454ee61e8e8ee73efa8623c2688d22d2.jpg"
              alt="Аватарка пользователя"
              className="avatar"
            />
          </div>
          <div className="mt-2">
            <p className="text-center">{login}</p>
            <p className="text-center name-user">
              {firstName} {lastName}
            </p>
          </div>
          <div className="mt-4">
            <Link to="/settings">
              <div className="mt-1 menu-item">
                <div className="flex align-items-center gap-3">
                  <Settings />
                  Настройки
                </div>
              </div>
            </Link>
            <Link to="/account">
              <div className="mt-1 menu-item">
                <div className="flex align-items-center gap-3">
                  <AppIcon />
                  Управление аккаунтом
                </div>
              </div>
            </Link>

            <div className="mt-1 menu-item">
              <div className="flex align-items-center gap-3">
                <PersonAdd />
                Добавить аккаунт
              </div>
            </div>

            <div className="mt-1 menu-item" onClick={logOut}>
              <div className="flex align-items-center gap-3">
                <LogOut />
                Выйти
              </div>
            </div>
          </div>
        </>
      }
    />
  );
}
