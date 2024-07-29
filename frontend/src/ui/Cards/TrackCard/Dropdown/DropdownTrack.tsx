import {Dropdown} from "@/components/Dropdown/Dropdown.tsx";
import {Dots} from "@/icons/Dots.tsx";
import {SecondHeart} from "@/icons/Hearts/SecondHeart.tsx";
import {BreakHeart} from "@/icons/Hearts/BreakHeart.tsx";
import './DropdownTrack.scss';
import {useAddToPlaylist} from "@/hooks/useAddToPlaylist.ts";
import {useCheckLike} from "@/hooks/useCheckLike.ts";
import {useEffect} from "react";
import {FillHeart} from "@/icons/Hearts/FillHeart.tsx";

interface Props {
    id: number;
    playlistId: number;
}

export function DropdownTrack({id, playlistId}: Props) {

    const {createLike} = useAddToPlaylist(id, playlistId);
    const {isLike, checkLike} = useCheckLike(playlistId, id);

    useEffect(() => {
        checkLike();
    });

    return (
        <Dropdown
            trigger={<Dots/>}
            classNames="absolute top-6 -left-24 w-max"

            content={
                <div>
                    <div className="mt-1 menu-item" onClick={createLike}>
                        <div className="d-flex align-items-center gap-3 text-[13px]">
                            {isLike ? (
                                <FillHeart/>
                            ): (
                                <SecondHeart/>
                            )}
                            Нравится
                        </div>
                    </div>


                    <div className="mt-1 menu-item">
                        <div className="d-flex align-items-center gap-3 text-[13px]">
                            <BreakHeart/>
                            Не нравится
                        </div>
                    </div>
                </div>
            }
        />
    );
}