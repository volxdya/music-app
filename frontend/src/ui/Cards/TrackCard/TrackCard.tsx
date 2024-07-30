import './TrackCard.scss';
import {SecondHeart} from "../../../icons/Hearts/SecondHeart.tsx";
import {BreakHeart} from "../../../icons/Hearts/BreakHeart.tsx";
import {DropdownTrack} from "@/ui/Cards/TrackCard/Dropdown/DropdownTrack.tsx";
import {Play} from "@/icons/Player/Play.tsx";
import {useAddToPlaylist} from "@/hooks/useAddToPlaylist.ts";
import {useEffect} from "react";
import {useCheckLike} from "@/hooks/useCheckLike.ts";
import {FillHeart} from "@/icons/Hearts/FillHeart.tsx";

interface Props {
    title: string;
    author: string;
    id: number;
    img?: string;
}

export function TrackCard({title, author, id, img}: Props) {
    const {createLike} = useAddToPlaylist(id);
    const {isLike, checkLike} = useCheckLike(id);

    useEffect(() => {
        checkLike();
    }, []);

    return (
        <div className="d-flex track-card justify-content-between align-items-center">
            <div className="d-flex gap-3">
                <div className="image-container">
                        <img src={img !== "" && img ? img : "https://i.pinimg.com/736x/6e/85/cf/6e85cf5884fc21b1c2e0a42f9c10b00d.jpg"}
                             alt={`Картинка трека ${title}`}/>
                    <div className="play-btn-container">
                        <button className="play-btn">
                        <Play/>
                        </button>
                    </div>
                </div>
                <div>
                    <p className="m-0 title">{title}</p>
                    <p className="m-0 author">{author}</p>
                </div>
            </div>
            <div className="d-flex gap-5 align-items-center controls-track">
                {!isLike ? (
                    <button onClick={createLike}>
                        <SecondHeart/>
                    </button>
                ): (
                    <button onClick={createLike} className="fill-heart">
                        <FillHeart/>
                    </button>
                )}
                <BreakHeart/>
                <DropdownTrack id={id}/>
                <div className="time">03:36</div>
            </div>
        </div>
    )
}