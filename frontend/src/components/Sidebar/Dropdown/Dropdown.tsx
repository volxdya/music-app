import {Settings} from "@/icons/Settings.tsx";
import {LogOut} from "@/icons/LogOut.tsx";
import './SidebarDropdown.scss';
import {Dropdown} from "@/components/Dropdown/Dropdown.tsx";
import {AppIcon} from "@/icons/AppIcon.tsx";
import {PersonAdd} from "@/icons/Person/PersonAdd.tsx";
import {removeItem} from "@/utils/localStorage.ts";
import {useToast} from "@/components/ui/use-toast.ts";

interface Props {
    login: string;
    firstName: string;
    lastName: string;
}

export function SidebarDropdown({login, firstName, lastName}: Props) {
    const {toast} = useToast();

    function logOut() {
        removeItem("token");

        toast({
            title: "Вы успешно вышли с аккаунта.",
            description: "Редирект произойдет через 5 секунд.",
        })

        setTimeout(() => {
            window.location.replace("/auth");
        }, 5000);
    }


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
                        <p className="text-center">{login}</p>
                        <p className="text-center name-user">{firstName} {lastName}</p>
                    </div>
                    <div className="mt-4">
                        <div className="mt-1 menu-item">
                            <div className="d-flex align-items-center gap-3">
                                <Settings/>
                                Настройки
                            </div>
                        </div>
                        <div className="mt-1 menu-item">
                            <div className="d-flex align-items-center gap-3">
                                <AppIcon/>
                                Управление аккаунтом
                            </div>
                        </div>
                        <div className="mt-1 menu-item">
                            <div className="d-flex align-items-center gap-3">
                                <PersonAdd/>
                                Добавить аккаунт
                            </div>
                        </div>

                        <div className="mt-1 menu-item" onClick={logOut}>
                            <div className="d-flex align-items-center gap-3">
                                <LogOut/>
                                Выйти
                            </div>
                        </div>
                    </div>
                </>
            }
        />
    );
}