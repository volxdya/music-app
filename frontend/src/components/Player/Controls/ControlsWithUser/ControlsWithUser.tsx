import { SecondHeart } from "@/icons/Hearts/SecondHeart.tsx";
import { MainPlayerDropdown } from "@/components/Player/Dropdown/MainPlayerDropdown.tsx";

interface Props {
  isHaveTrack: boolean;
}

export function ControlsWithUser({ isHaveTrack }: Props) {

  return (
    <div className="flex align-items-center mx-4">
      {isHaveTrack && (
        <div className="controls-player flex gap-4">
          <SecondHeart />
          <MainPlayerDropdown />
        </div>
      )}
    </div>
  );
}
