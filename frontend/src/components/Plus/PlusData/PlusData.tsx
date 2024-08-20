import "./PlusData.scss";
import {Check} from "@/icons/Check.tsx";
import {X} from "@/icons/X.tsx";
import user from "@/store/user.ts";
import {observer} from "mobx-react-lite";

export const PlusData = observer(() => (
  <div className="d-flex justify-content-center">
    <div className="plus-wrapper p-4">
      <div className="plus-container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex gap-3 align-items-center plus-title">
            <h2 className="fs-5">Плюс</h2>
            {user.me.isSubscribed ? (
              <div className="check">
                <Check />
              </div>
            ) : (
              <div className="x">
                <X />
              </div>
            )}
          </div>
          {user.me.isSubscribed ? (
            <button className="btn btn-primary">Приостановить подписку</button>
          ) : (
            <button className="btn btn-primary">Получить плюс</button>
          )}
        </div>

        <div className="plus-data mt-4">
          <div className="plus-main-data">
            <h2 className="fs-4 text-white font-medium">99₽</h2>
            {user.me.isSubscribed ? (
              <p className="mt-2 text-neutral-300">Спишется 26 августа</p>
            ) : (
              <p className="mt-2 text-neutral-300">У вас нет подписки =(</p>
            )}
          </div>
          <div className="d-flex justify-content-between mt-3 links-plus">
            <a href="#" className="link-plus active">
              Сменить план
            </a>
            <a href="#" className="link-plus">
              Последние списания
            </a>
            <a href="#" className="link-plus">
              Способы оплаты
            </a>
          </div>
        </div>

        <div className="plus-data mt-4 p-[25px]">
          <p>Входят в вашу подписку</p>
          <p className="mt-2">4 аккаунта</p>
          <p className="mt-2">Скоро...</p>
        </div>

        {user.me.isSubscribed && (
            <button className="stop-subscription mt-5 btn-primary btn">
              Остановить подписку
            </button>
        )}
      </div>
    </div>
  </div>
));
