import './PlaylistCard.scss';

export function PlaylistCard() {
    return (
        <div className="mt-4">
            <div>
                <img
                    src="https://i.pinimg.com/564x/30/e8/bf/30e8bfcf22a3769266547b7fe6d79fad.jpg"
                    alt=""
                    className="playlist-image"
                />
            </div>
            <div className="mt-2">
                <a href="#" className="title-playlist">coding</a>
            </div>
        </div>
    );
}