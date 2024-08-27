import { Sidebar } from "../Sidebar/Sidebar.tsx";
import { Route, Routes, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import user from "@/store/user.ts";
import { validateFn } from "@/utils/validate.ts";

export default function App() {
  const MainPage = lazy(() => import("../MainScreen/MainScreen.tsx"));
  const Search = lazy(() => import("../Search/Search.tsx"));
  const Collection = lazy(() => import("../Collection/Collection.tsx"));
  const Authorization = lazy(
    () => import("../Authorization/Authorization.tsx"),
  );
  const Registration = lazy(() => import("../Registration/Registration.tsx"));
  const Playlist = lazy(() => import("../Playlist/Playlist.tsx"));
  const Tracks = lazy(() => import("../Tracks/Tracks.tsx"));
  const TracksPage = lazy(() => import("@/ui/TracksPage/TracksPage.tsx"));
  const Album = lazy(() => import("../Album/Album.tsx"));
  const Author = lazy(() => import("../Author/Author.tsx"));
  const Player = lazy(() => import("../Player/Player.tsx"));
  const Plus = lazy(() => import("../Plus/Plus.tsx"));
  const Settings = lazy(() => import("../Settings/Settings.tsx"));
  const Account = lazy(() => import("../Account/Account.tsx"));

  const location = useLocation();
  const locationsForValidate: string[] = [
    "/auth/login",
    "/auth/selectAccount",
    "/register",
    "/plus/change_plan",
    "/plus/last_spending",
    "/plus/payment_methods",
    "/account",
  ];

  console.log(location);

  const validateLocation: boolean = validateFn<string>(
    locationsForValidate,
    location.pathname,
  );

  useEffect(() => {
    user.getMe();
  }, []);

  return (
    <Suspense fallback={<div>loading...</div>}>
      <div className="row g-0">
        {validateLocation && (
          <div className="col-xl-2 col-12">
            <Sidebar />
          </div>
        )}
        <div
          className={
            validateLocation ? "col-xl-10 col-12 main-screen" : "col-12"
          }
        >
          <div className={validateLocation ? "main-wrapper" : ""}>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/search" element={<Search />} />
              <Route path="/collection" element={<Collection />} />
              <Route path="/auth/:select" element={<Authorization />} />
              <Route path="/register" element={<Registration />} />
              <Route path="/like" element={<Playlist />} />
              <Route path="/tracks" element={<Tracks />} />
              <Route path="/plus/:item" element={<Plus />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/account" element={<Account />} />
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
    </Suspense>
  );
}
