import { Link } from 'react-router-dom';
import './AlbumCard.scss';

interface Props {
    title: string;
    author: string;
    year: string;
    img?: string;
    id: number;
}

export function AlbumCard({ title, author, year, img, id }: Props) {
    return (
        <Link to={`/album/${id}`}>
            <div className="album-card">
                <img
                    src={img !== "" && img ? img : "https://images.genius.com/78bad7a7b8c84b0dfb8db76ad2ffe8f9.1000x1000x1.png"}
                    alt={"Картинка альбома"}
                    className="album-img"
                />
                <div className="mt-1">
                    <p className="album-title">{title}</p>
                    <p className="album-author">{author}</p>
                    <p className="album-year">{year}</p>
                </div>
            </div>
        </Link>
    );
}