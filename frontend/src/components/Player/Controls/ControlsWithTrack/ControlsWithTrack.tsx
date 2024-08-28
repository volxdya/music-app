import { SettingsPlayerDropdown } from "@/components/Player/Dropdown/SettingsPlayerDropdown.tsx";
import { VolumeOff } from "@/icons/Volume/VolumeOff.tsx";
import { VolumeDown } from "@/icons/Volume/VolumeDown.tsx";
import { VolumeUp } from "@/icons/Volume/VolumeUp.tsx";
import { observer } from "mobx-react-lite";
import player from "@/store/player.ts";
import { ChangeEvent } from "react";

interface Props {
  refAudio: React.MutableRefObject<HTMLMediaElement>;
}

export const ControlsWithTrack = observer(({ refAudio }: Props) => {
  const currentVolume: number = player.current.currentVolume;
  const handleChangeVolume = (e: ChangeEvent<HTMLInputElement>) => {
    if (refAudio.current) {
      refAudio.current.volume = Number(e.target.value / 100);

      player.current.currentVolume = Number(e.target.value / 100);
      player.current.previousVolume = Number(e.target.value / 100);
    }
  };

  const offMusic = () => {
    if (refAudio.current) {
      refAudio.current.volume = 0;
      player.current.currentVolume = 0;
    }
  };

  const onMusic = () => {
    if (refAudio.current) {
      refAudio.current.volume = player.current.previousVolume;
      player.current.currentVolume = player.current.previousVolume;
    }
  };

  return (
    <div className="settings-player flex justify-content-end gap-4">
      <div className="flex align-items-center gap-3">
        <SettingsPlayerDropdown />

        {refAudio.current && (
          <>
            {currentVolume === 0 && (
              <button onClick={onMusic}>
                <VolumeOff />
              </button>
            )}

            {currentVolume * 100 < 50 && currentVolume > 0 && (
              <button onClick={offMusic}>
                <VolumeDown />
              </button>
            )}

            {currentVolume * 100 >= 50 && (
              <button onClick={offMusic}>
                <VolumeUp />
              </button>
            )}
          </>
        )}
        <input type="range" onChange={handleChangeVolume} />
      </div>
    </div>
  );
});
