import {Dropdown} from "@/components/Dropdown/Dropdown.tsx";
import {Dots} from "@/icons/Dots.tsx";
import {SecondHeart} from "@/icons/Hearts/SecondHeart.tsx";
import {BreakHeart} from "@/icons/Hearts/BreakHeart.tsx";
import './DropdownTrack.scss';
import {useAddToPlaylist} from "@/hooks/useAddToPlaylist.ts";

interface Props {
    id: number;
}

export function DropdownTrack({id}: Props) {

    const {createLike} = useAddToPlaylist(id);


    return (
        <Dropdown
            trigger={<Dots/>}
            classNames="absolute top-6 -left-24 w-max"

            content={
                <div>
                    <div className="mt-1 menu-item" onClick={createLike}>
                        <div className="d-flex align-items-center gap-3 text-[13px]">

                            <SecondHeart/>

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