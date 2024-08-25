import "./SettingsCard.scss";
import { Right } from "@/icons/Right.tsx";

interface Props {
  text: string;
  otherText?: string;
}

export function SettingsCard({ text, otherText }: Props) {
  return (
    <div className="d-flex align-items-center mt-2 settings-card py-2.5 justify-content-between">
      <div>
        <h2 className="font-medium text-[15px]">{text}</h2>
        {otherText && (
          <p className="text-[13px] font-medium mt-1 text-neutral-500">
            {otherText}
          </p>
        )}
      </div>
      <Right />
    </div>
  );
}
