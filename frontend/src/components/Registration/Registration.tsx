import { MainTitle } from "@/ui/Text/MainTitle/MainTitle.tsx";
import { Link } from "react-router-dom";
import { useState } from "react";
import { onChange } from "@/utils/onChange.ts";
import { useRegister } from "@/hooks/useRegister.ts";
import { Spinner } from "@/ui/Spinner/Spinner.tsx";

export default function Registration() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFisrtName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isAuthor, setIsAuthor] = useState(false);

  const { handleSubmit, isSuccess, isLoading } = useRegister(isAuthor);

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
              <input
                placeholder="Логин"
                className="mt-3"
                type="text"
                onChange={onChange(setLogin)}
              />
              <input
                placeholder="Имя"
                className="mt-3"
                type="text"
                onChange={onChange(setFisrtName)}
              />
              <input
                placeholder="Фамилия"
                className="mt-3"
                type="text"
                onChange={onChange(setLastName)}
              />
              <input
                placeholder="Пароль"
                className="mt-3"
                type="password"
                onChange={onChange(setPassword)}
              />
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
                <Link to="/auth">
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
