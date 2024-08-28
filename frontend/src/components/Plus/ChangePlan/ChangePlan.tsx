import { Box } from "@/icons/Box.tsx";
import "./ChangePlan.scss";
import { Boxes } from "@/icons/Boxes.tsx";
import { useSubscriptionsData } from "@/hooks/useSubscriptionsData.ts";
import { ISubscription } from "@/types/ISubscription.ts";
import { BuyModal } from "@/components/Plus/Modals/Buy/Buy.tsx";
import user from "@/store/user.ts";

export function ChangePlan() {
  const [subscriptionData] = useSubscriptionsData();

  return (
    <div>
      {subscriptionData.map((item: ISubscription) => (
        <div className="flex change-plan-card justify-content-between mt-2 align-items-center">
          <div className="flex gap-3 align-items-center">
            <Boxes />
            <div className="data-plan">
              <p className="text-[17px] flex gap-2 align-items-center">
                {item.title}
                {user.me.subscription && (
                  <>
                    {item.id === user.me.subscription.id && (
                      <span className="text-[12px] active-plan">Активен</span>
                    )}
                  </>
                )}
              </p>
              <p className="text-[16px] text-neutral-400">
                {item.price}₽ в {item.duration} месяцев
              </p>
            </div>
          </div>

          {user.me.subscription && (
              <>
                {user.me.subscription.id !== item.id && (
                    <BuyModal
                        buyButton={
                          <button className="change-plan-btn btn btn-primary">
                            {user.me.isSubscribed ? (
                                <div>Перейти</div>
                            ): (
                                <div>Получить</div>
                            )}
                          </button>
                        }
                        subscriptionId={item.id}
                    />
                )}
              </>
          )}
        </div>
      ))}
    </div>
  );
}
