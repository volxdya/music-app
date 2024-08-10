import { Sidebar } from "../Sidebar/Sidebar.tsx";
import { Routes, Route, useLocation } from "react-router-dom";
import { MainScreen } from "../MainScreen/MainScreen.tsx";
import { Search } from "../Search/Search.tsx";
import { Collection } from "../Collection/Collection.tsx";
import { Player } from "../Player/Player.tsx";
import { Authorization } from "@/components/Authorization/Authorization.tsx";
import { Registration } from "@/components/Registration/Registration.tsx";
import { TracksPage } from "@/ui/TracksPage/TracksPage.tsx";
import { Playlist } from "@/components/Playlist/Playlist.tsx";
import { Tracks } from "@/components/Tracks/Tracks.tsx";
import { Album } from "../Album/Album.tsx";
import { useEffect } from "react";
import user from "@/store/user.ts";
import { Author } from "../Author/Author.tsx";
import {useGenresData} from "@/hooks/useGenresData.ts";

export default function App() {
  const location = useLocation();
  // const locationsForValidate: string[] = ["/auth", "/register"];

  const validateLocation: boolean =
    location.pathname !== "/auth" &&
    location.pathname !== "/register" &&
    location.pathname !== "/test";

  const [genres] = useGenresData();

  console.log(genres);

  useEffect(() => {
    user.getMe();
  }, []);

  return (
    <div className="row g-0">
      {validateLocation && (
        <div className="col-xl-2 col-12">
          <Sidebar />
        </div>
      )}
      <div
        className={validateLocation ? "col-xl-10 col-12 main-screen" : "col-12"}
      >
        <div className={validateLocation ? "main-wrapper" : ""}>
          <Routes>
            <Route path="/" element={<MainScreen />} />
            <Route path="/search" element={<Search />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/auth" element={<Authorization />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/like" element={<Playlist />} />
            <Route path="/tracks" element={<Tracks />} />
            <Route
              path="/tracks/:search/:bySearch/:isAuthor"
              element={<TracksPage />}
            />
            <Route path="/album/:albumId" element={<Album />} />
            <Route path="/author/:authorId" element={<Author />} />
          </Routes>
        </div>
        {validateLocation && <Player />}
      </div>
    </div>
  );
}
