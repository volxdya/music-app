import {NavigationText} from "@/ui/Text/NavigationText/NavgiationText.tsx";

export function NavigationCollection() {
    return (
        <>
            <NavigationText text="Мои плейлисты" />

            <nav className="nav-playlists flex gap-3 mt-4 align-items-center">
                <p className="nav-playlist-item nav-playlist-active">Вы собрали</p>
                <p className="nav-playlist-item">Вам понравилось</p>
            </nav>

        </>
    );
}