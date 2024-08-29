import { Modal } from "@/ui/Modal/Modal.tsx";
import "./buy.scss";
import { FormEvent, useEffect, useState } from "react";
import { onChange } from "@/utils/onChange.ts";
import { stopFormBehavior } from "@/utils/stopFormBehavior.ts";
import { useBuySubscription } from "@/hooks/useBuySubscription.ts";
import user from "@/store/user.ts";

interface Props {
  buyButton: React.ReactNode;
  subscriptionId: number;
}

export function BuyModal({ buyButton, subscriptionId }: Props) {
  const [card, setCard] = useState("");
  const [mm, setMM] = useState("");
  const [CVV, setCVV] = useState("");
  const [isDisable, setIsDisalbe] = useState(true);
  const [buy] = useBuySubscription(user.userData.id, subscriptionId);

  const handleSubmit = (e: FormEvent) => {
    stopFormBehavior(e);
  };

  useEffect(() => {
    if (card.length === 12 && mm.length === 4 && CVV.length === 3) {
      setIsDisalbe(false);
    }
  }, [card, mm, CVV]);

  return (
    <Modal
      trigger={buyButton}
      content={
        <form className="buy-modal" onSubmit={(e) => handleSubmit(e)}>
          <p className="text-center text-[20px]">Продукты //</p>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Номер карты"
              className="card-number"
              maxLength={16}
              onChange={onChange(setCard)}
            />
            <div className="flex">
              <input
                type="text"
                placeholder="ММ / ГГ"
                className="mm-input"
                maxLength={4}
                onChange={onChange(setMM)}
              />
              <input
                type="password"
                placeholder="CVV"
                className="cvv-input"
                maxLength={3}
                onChange={onChange(setCVV)}
              />
            </div>
            <button
              className="w-full mt-3 buy-button"
              disabled={isDisable}
              onClick={buy}
            >
              Оплатить 99 ₽
            </button>
            <button className="w-full mt-2 other-button">Soon</button>
          </div>
        </form>
      }
    ></Modal>
  );
}
