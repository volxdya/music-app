import "./AccountCard.scss";
import { getItems, setItem } from "@/utils/localStorage.ts";

interface Props {
  login: string;
  index: number;
}

export function AccountCard({ login, index }: Props) {
  const selectAccount = () => {
    setItem("token", getItems("all_tokens")[index]);

    window.location.replace('/');
  };

  return (
    <div>
      <img
        src="https://i.pinimg.com/736x/45/4e/e6/454ee61e8e8ee73efa8623c2688d22d2.jpg"
        alt="Аватарка пользователя"
        className="select-avatar-account"
        onClick={selectAccount}
      />
      <p className="text-center mt-2 text-[20px]">{login}</p>
    </div>
  );
}
