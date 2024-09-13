import { MainTitle } from "@/ui/Text/MainTitle/MainTitle.tsx";
import { Link } from "react-router-dom";
import { useState } from "react";
import { onChange } from "@/utils/onChange.ts";
import { useRegister } from "@/hooks/useRegister.ts";
import { Spinner } from "@/ui/Spinner/Spinner.tsx";
import { IFormInput } from "@/types/IFormInput";

export default function Registration() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFisrtName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isAuthor, setIsAuthor] = useState(false);

  const { handleSubmit, isSuccess, isLoading } = useRegister(isAuthor);
  const inputs: IFormInput[] = [
    {
      placeholder: "Логин",
      type: "text",
      onChangeFn: onChange(setLogin),
      classNames: "mt-3"
    },
    {
      placeholder: "Имя",
      type: "text",
      onChangeFn: onChange(setFisrtName),
      classNames: "mt-3"
    },
    {
      placeholder: "Фамилия",
      type: "text",
      onChangeFn: onChange(setLastName),
      classNames: "mt-3"
    },
    {
      placeholder: "Пароль",
      type: "password",
      onChangeFn: onChange(setPassword),
      classNames: "mt-3"
    },
  ];

  return (
    <form
      className="form-auth"
      onSubmit={(e) => handleSubmit(e, login, password, firstName, lastName)}
    >
      <div className="form-group">
        <div className="mt-4">
          <div className="flex justify-center">
            <MainTitle />
          </div>
          <h2 className="mt-3 text-auth text-center">
            Остался один шаг до музыки
          </h2>

          <div className="mt-4 inputs-container">
            <div>
              {inputs.map((item: IFormInput) => (
                <input
                  placeholder={item.placeholder}
                  className={item.classNames}
                  type={item.type}
                  onChange={item.onChangeFn}
                />
              ))}
              <div className="form-check form-switch mt-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  checked={isAuthor}
                  onChange={() => {
                    setIsAuthor(!isAuthor);
                  }}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                >
                  Автор
                </label>
              </div>
              <div className="mt-4">
                {isLoading ? (
                  <button disabled>
                    <Spinner />
                  </button>
                ) : (
                  <button disabled={isSuccess}>Продолжить</button>
                )}
                <Link to="/auth/login">
                  <button className="create-id-btn">У меня есть аккаунт</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
