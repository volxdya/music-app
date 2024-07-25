import './PlaylistCard.scss';
import {Note} from "@/icons/Note.tsx";

interface Props {
    imageUrl: string;
    title: string;
}

export function PlaylistCard({imageUrl, title}: Props) {
    return (
        <div className="mt-4">
            <div>
                {imageUrl === "" ? (
                    <div className="d-flex justify-content-center align-items-center empty-image">
                        <Note/>
                    </div>
                ): (
                    <img
                        src={imageUrl}
                        alt={`Картинка плейлиста ${title}`}
                        className="playlist-image"
                    />
                )}
            </div>
            <div className="mt-2">
                <a href="#" className="title-playlist">{title}</a>
            </div>
        </div>
    );
}