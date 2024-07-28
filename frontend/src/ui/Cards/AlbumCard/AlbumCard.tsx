import './AlbumCard.scss';

interface Props {
    title: string;
    author: string;
    year: string;
}

export function AlbumCard({title, author, year}: Props) {
    return (
        <div className="album-card">
            <img
                src="https://images.genius.com/78bad7a7b8c84b0dfb8db76ad2ffe8f9.1000x1000x1.png"
                alt={"Картинка альбома"}
                className="album-img"
            />
            <div className="mt-1">
                <p className="album-title">{title}</p>
                <p className="album-author">{author}</p>
                <p className="album-year">{year}</p>
            </div>
        </div>
    );
}