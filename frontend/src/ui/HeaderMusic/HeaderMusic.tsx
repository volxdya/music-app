import './HeaderMusic.scss';
import { Play } from "@/icons/Play.tsx";
import { SecondHeart } from "@/icons/Hearts/SecondHeart.tsx";
import { Dots } from "@/icons/Dots.tsx";
import { Dropdown } from "@/ui/Dropdown/Dropdown.tsx";
import { Pin } from "@/icons/Pin.tsx";

interface Props {
    whatIs: string;
    author: string;
    title: string;
    isCircle: boolean;
    img?: string;
}

export function HeaderMusic({ whatIs, author, title, isCircle, img }: Props) {
    return (
        <div className="d-flex header-music gap-5">
            <div>
                <img
                    src={
                        img !== "" &&
                            img ? img :
                            "https://avatars.dzeninfra.ru/get-zen_doc/9716076/pub_644517496bd5324872213267_64451add0c190e4a11bc9554/scale_1200"
                    }
                    className={isCircle ? "rounded-full" : "rounded-[10px]"}
                    alt={`${whatIs} ${author}`} />
            </div>
            <div>
                <p className="text-neutral-400 font-medium text-[14px]">{whatIs}</p>
                <h2 className="fs-1 font-bold mt-2">{title}</h2>
                <p className="mt-2 font-medium text-neutral-400 text-[14px] author-text-header">{author}</p>

                <div className="controls-header-music mt-4 d-flex gap-3">
                    <button className="play">
                        <Play />
                        Слушать
                    </button>
                    <button className="other-btn">
                        <SecondHeart />
                    </button>
                    <Dropdown
                        trigger={
                            <button className="other-btn">
                                <Dots />
                            </button>
                        }
                        content={
                            <div className="mt-1 menu-item">
                                <div className="d-flex align-items-center gap-3">
                                    <Pin />
                                    Закрепить
                                </div>
                            </div>
                        }
                    />

                </div>
            </div>
        </div>
    );
}