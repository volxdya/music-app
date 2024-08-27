import "./Account.scss";
import { Link } from "react-router-dom";
import { MainTitle } from "@/ui/Text/MainTitle/MainTitle.tsx";
import user from "@/store/user.ts";
import { AccountModal } from "@/components/Account/Modal/Modal.tsx";

const Account = () => {
  return (
    <>
      <header className="flex justify-content-between p-4 ">
        <div className="flex align-items-center gap-3">
          <Link to="/">
            <MainTitle />
          </Link>
          <h2 className="fs-4 plus-title font-medium">ID</h2>
        </div>
      </header>

      <div className="flex justify-center account mt-4 data-account-edit">
        <div>
          <div className="flex justify-center">
            <img
              src="https://i.pinimg.com/736x/45/4e/e6/454ee61e8e8ee73efa8623c2688d22d2.jpg"
              alt="Аватарка пользователя"
              className="avatar-account"
            />
          </div>

          <div className="text-center mt-3">
            <h2 className="text-[24px] font-semibold">
              <span className="flex align-items-center gap-2 user-data">
                {user.userData.firstName} {user.userData.lastName}
                <AccountModal />
              </span>
            </h2>
            <p className="mt-2">{user.userData.login}</p>
            {user.me.isSubscribed ? (
              <p className="text-[15px]">Плюс активен</p>
            ) : (
              <p className="text-[15px]">Плюс неактивен</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
