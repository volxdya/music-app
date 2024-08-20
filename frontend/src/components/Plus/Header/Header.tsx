import { MainTitle } from "@/ui/Text/MainTitle/MainTitle.tsx";
import { Dropdown } from "@/components/Dropdown/Dropdown.tsx";
import { AppIcon } from "@/icons/AppIcon.tsx";
import { PersonAdd } from "@/icons/Person/PersonAdd.tsx";
import { LogOut } from "@/icons/LogOut.tsx";
import "./Header.scss";
import { observer } from "mobx-react-lite";
import user from "@/store/user.ts";
import {Link} from "react-router-dom";

export const HeaderPlus = observer(() => (
  <header className="d-flex justify-content-between">
    <div className="d-flex align-items-center gap-3">
      <Link to="/">
        <MainTitle />
      </Link>
      <h2 className="fs-4 plus-title font-medium">Плюс</h2>
    </div>
    <div>
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
              <p className="text-center">{user.userData.login}</p>
              <p className="text-center name-user">
                {user.userData.firstName} {user.userData.lastName}
              </p>
            </div>
            <div className="mt-4">
              <div className="mt-1 menu-item">
                <div className="d-flex align-items-center gap-3">
                  <AppIcon />
                  Управление аккаунтом
                </div>
              </div>
              <div className="mt-1 menu-item">
                <div className="d-flex align-items-center gap-3">
                  <PersonAdd />
                  Добавить аккаунт
                </div>
              </div>

              <div className="mt-1 menu-item">
                <div className="d-flex align-items-center gap-3">
                  <LogOut />
                  Выйти
                </div>
              </div>
            </div>
          </>
        }
      />
    </div>
  </header>
));
