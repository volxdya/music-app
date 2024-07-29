import './HeaderMusic.scss';
import {Play} from "@/icons/Play.tsx";
import {SecondHeart} from "@/icons/Hearts/SecondHeart.tsx";
import {Dots} from "@/icons/Dots.tsx";

interface Props {
    whatIs: string;
    author: string;
    title: string;
}

export function HeaderMusic({whatIs, author, title}: Props) {
    return (
      <div className="d-flex header-music gap-5">
          <div>
              <img src="https://avatars.dzeninfra.ru/get-zen_doc/9716076/pub_644517496bd5324872213267_64451add0c190e4a11bc9554/scale_1200" alt=""/>
          </div>
          <div>
              <p className="text-neutral-400 font-medium text-[14px]">{whatIs}</p>
              <h2 className="fs-1 font-bold mt-2">{title}</h2>
              <p className="mt-2 font-medium text-neutral-400 text-[14px] author-text-header">{author}</p>

              <div className="controls-header-music mt-4 d-flex gap-3">
                  <button className="play"><Play/>Слушать</button>
                  <button className="other-btn"><SecondHeart/></button>
                  <button className="other-btn"><Dots/></button>
              </div>
          </div>
      </div>
    );
}