import "./PlusData.scss";
import { Check } from "@/icons/Check.tsx";
import { X } from "@/icons/X.tsx";
import user from "@/store/user.ts";
import { observer } from "mobx-react-lite";
import { useBuySubscription } from "@/hooks/useBuySubscription.ts";
import { getStringDate } from "@/utils/getStringDate.ts";
import { getMonthByIndex } from "@/utils/getMonthByIndex.ts";
import { Link, useParams } from "react-router-dom";
import plus from "@/store/plus.ts";
import { ChangePlan } from "@/components/Plus/ChangePlan/ChangePlan.tsx";
import { StopModal } from "@/components/Plus/Modals/Stop/Stop.tsx";
import { BuyModal } from "@/components/Plus/Modals/Buy/Buy.tsx";
import uniqid from "uniqid";

interface IPlus {
  param: string;
  title: string;
}

export const PlusData = observer(() => {
  const [buy] = useBuySubscription(user.userData.id, 1);

  const params = useParams();

  const plusItems: IPlus[] = [
    {
      title: "Сменить план",
      param: "change_plan",
    },
    {
      title: "Последние списания",
      param: "last_spending",
    },
    {
      title: "Способы оплаты",
      param: "payment_methods",
    },
  ];

  return (
    <div className="flex justify-center">
      <div className="plus-wrapper p-4">
        <div className="plus-container">
          <div className="flex justify-content-between align-items-center">
            <div className="flex gap-3 align-items-center plus-title">
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
              <StopModal
                buttonStop={
                  <button className="btn btn-primary">
                    Приостановить подписку
                  </button>
                }
              />
            ) : (
              <button className="btn btn-primary" onClick={buy}>
                Получить плюс
              </button>
            )}
          </div>

          <div className="plus-data mt-4">
            <div className="plus-main-data">
              <h2 className="fs-4 text-white font-medium">
                {user.me.subscription && (
                    <h1>{user.me.subscription.price} ₽</h1>
                )}
              </h2>
              {user.me.isSubscribed ? (
                <p className="mt-2 text-neutral-300">
                  Спишется {getStringDate(user.me.finishSubscribe.date, "DD ")}
                  {getMonthByIndex(user.me.finishSubscribe.indexMonth)}
                  {getStringDate(user.me.finishSubscribe.date, ", YYYY года")}
                </p>
              ) : (
                <p className="mt-2 text-neutral-300">У вас нет подписки =(</p>
              )}
            </div>
            <div className="flex justify-content-between mt-3 links-plus">
              {plusItems.map((item: IPlus) => (
                <Link
                  key={uniqid()}
                  to={`/plus/${item.param}`}
                  onClick={() => plus.setCurrent(item.param)}
                  className={
                    item.param === params.item
                      ? "active link-plus"
                      : "link-plus"
                  }
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="container-of-choise-item mt-4 px-4 py-3">
            {plus.current === "change_plan" && <ChangePlan />}
          </div>

          <div className="plus-data mt-4 p-[25px]">
            <p>Входят в вашу подписку</p>
            <p className="mt-2">4 аккаунта</p>
            <p className="mt-2">Скоро...</p>
          </div>

          {user.me.isSubscribed ? (
            <StopModal
              buttonStop={
                <button className="btn-subscription mt-5 btn-primary btn">
                  Остановить подписку
                </button>
              }
            />
          ) : (
            <BuyModal
              buyButton={
                <button className="btn-subscription mt-5 btn-primary btn">
                  Купить подписку
                </button>
              }
            />
          )}
        </div>
      </div>
    </div>
  );
});
