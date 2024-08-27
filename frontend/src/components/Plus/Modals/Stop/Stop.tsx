import { Modal } from "@/components/Modal/Modal.tsx";
import "./Stop.scss";
import { useDeleteSubscription } from "@/hooks/useDeleteSubscription.ts";
import user from "@/store/user.ts";

interface IProps {
    buttonStop: React.ReactNode;
}

export function StopModal({ buttonStop }: IProps) {
  const [deleteSubscription] = useDeleteSubscription(user.userData.id);

  return (
    <Modal
      trigger={buttonStop}
      content={
        <div className="stop-modal flex justify-center align-items-center">
          <div>
            <img src="https://vk.com/sticker/1-88385-512" alt="" />
            <p className="text-center text-[25px]">Вы уверены?</p>
            <button
              className="w-full mt-4 btn-stop"
              onClick={deleteSubscription}
            >
              Отменить
            </button>
          </div>
        </div>
      }
    />
  );
}
