import { SettingsCard } from "@/components/Settings/SettingsCard/SettingsCard.tsx";
import { Modal } from "@/components/Modal/Modal.tsx";

export default function Settings() {
  return (
    <div>
      <Modal
        trigger={<SettingsCard text="Горячие клавиши" />}
        content={<div>123</div>}
      />
      <Modal
        trigger={<SettingsCard text="О приложении" otherText="Версия 5.13.2" />}
        content={<div>qwfqfqwfqwfqwf</div>}
      />
    </div>
  );
}
