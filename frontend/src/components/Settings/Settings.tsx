import { SettingsCard } from "@/components/Settings/SettingsCard/SettingsCard.tsx";

export default function Settings() {
  return (
    <div>
      <SettingsCard text="Горячие клавиши" />
      <SettingsCard text="О приложении" otherText="Версия 5.13.2" />
    </div>
  );
}
