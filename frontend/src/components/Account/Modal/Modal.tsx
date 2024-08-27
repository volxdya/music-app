import { Modal } from "@/components/Modal/Modal.tsx";
import { Pencil } from "@/icons/Pencil.tsx";
import "./Modal.scss";
import { useState } from "react";
import user from "@/store/user.ts";
import { onChange } from "@/utils/onChange.ts";
import { useUpdateUser } from "@/hooks/useUpdateUser.ts";

export function AccountModal() {
  const [login, setLogin] = useState(user.userData.login);
  const [firstName, setFirstName] = useState(user.userData.firstName);
  const [lastName, setLastName] = useState(user.userData.lastName);
  const [handleSubmit] = useUpdateUser();

  return (
    <Modal
      trigger={
        <span>
          <Pencil />
        </span>
      }
      content={
        <div>
          <h2 className="text-[23px] font-medium">Ваши данные</h2>
          <form
            className="flex justify-center align-items-center account mt-5"
            onSubmit={(e) => handleSubmit(e, login, firstName, lastName)}
          >
            <div className="w-full">
              <div className="flex justify-center">
                <img
                  src="https://i.pinimg.com/736x/45/4e/e6/454ee61e8e8ee73efa8623c2688d22d2.jpg"
                  alt="Аватарка пользователя"
                  className="avatar-account"
                />
              </div>
              <div className="mt-5 form-account">
                <div className="px-[30.5px]">
                  <label className="text-[17px]">
                    <p>Как к вам обращаться?</p>
                    <input
                      type="text"
                      className="account-input mt-2"
                      value={login}
                      onChange={onChange(setLogin)}
                    />
                  </label>
                </div>
              </div>
              <h2 className="text-[20px] mt-5">Персональные данные</h2>
              <p className="mt-4">Имя и фамилия</p>
              <div className="mt-3 flex justify-center form-account">
                <div className="px-[30.5px]">
                  <input
                    type="text"
                    className="account-input"
                    value={firstName}
                    onChange={onChange(setFirstName)}
                  />

                  <input
                    type="text"
                    className="account-input mt-3"
                    value={lastName}
                    onChange={onChange(setLastName)}
                  />
                </div>
              </div>
              <button className="mt-5 save-button mx-[30.5px]">
                Сохранить
              </button>
            </div>
          </form>
        </div>
      }
    />
  );
}
