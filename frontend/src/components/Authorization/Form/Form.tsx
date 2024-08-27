import { useState } from "react";
import { useAuth } from "@/hooks/useAuth.ts";
import { MainTitle } from "@/ui/Text/MainTitle/MainTitle.tsx";
import { onChange } from "@/utils/onChange.ts";
import { Spinner } from "@/ui/Spinner/Spinner.tsx";
import { Link } from "react-router-dom";

export function Form() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthor, setIsAuthor] = useState(false);

  const { handleSubmit, isLoading } = useAuth(isAuthor);

  return (
    <form
      className="form-auth"
      onSubmit={(e) => handleSubmit(e, login, password)}
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
                  onChange={() => {
                    setIsAuthor(!isAuthor);
                  }}
                  checked={isAuthor}
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
                  <button>Войти</button>
                )}
                <Link to="/register">
                  <button className="create-id-btn">Создать ID</button>
                </Link>
                {!isAuthor ? (
                  <button
                    type="button"
                    className="i-author"
                    onClick={() => setIsAuthor(true)}
                  >
                    Я исполнитель
                  </button>
                ) : (
                  <button
                    type="button"
                    className="i-author"
                    onClick={() => setIsAuthor(false)}
                  >
                    Я слушатель
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
