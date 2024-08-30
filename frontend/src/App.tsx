import { Route, Routes, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import user from "@/store/user.ts";
import { validateFn } from "@/utils/validate.ts";
import Player from "@/components/Player/Player.tsx";
import Playlist from "@/components/Playlist/Playlist.tsx";
import Tracks from "@/components/Tracks/Tracks.tsx";
import Plus from "@/components/Plus/Plus.tsx";
import TracksPage from "@/ui/TracksPage/TracksPage.tsx";
import Album from "@/components/Album/Album.tsx";
import Author from "@/components/Author/Author.tsx";
import Collection from "@/components/Collection/Collection.tsx";
import MainScreen from "@/components/MainScreen/MainScreen.tsx";
import { Sidebar } from "@/components/Sidebar/Sidebar.tsx";
import { useCheckSubscription } from "./hooks/useCheckSubscription.ts";
import { deleteSubscriptionUser } from "@/api/subscription/deleteSubscription.ts";

export default function App() {
  const Search = lazy(() => import("../src/components/Search/Search.tsx"));
  const Authorization = lazy(
    () => import("../src/components/Authorization/Authorization.tsx"),
  );
  const Registration = lazy(
    () => import("../src/components/Registration/Registration.tsx"),
  );
  const Settings = lazy(
    () => import("../src/components/Settings/Settings.tsx"),
  );
  const Account = lazy(() => import("../src/components/Account/Account.tsx"));

  const location = useLocation();

  /*
        Массив эндпоинтов, по которым не отображается левый сайдбар.
        Почему-то params тоже входят в пути React-router и приходится их тоже сюда вписывать, но как-нибудь я найду споспоб, чтобы писать только роут.
        Например: "/auth", без /login
      */
  const locationsForValidate: string[] = [
    "/auth/login",
    "/auth/selectAccount",
    "/register",
    "/plus/change_plan",
    "/plus/last_spending",
    "/plus/payment_methods",
    "/account",
  ];

  const validateLocation: boolean = validateFn<string>(
    locationsForValidate,
    location.pathname,
  );

  const [isFinish] = useCheckSubscription(user.me.id);

  useEffect(() => {
    user.getMe();

    if (isFinish) {
      deleteSubscriptionUser(user.me.id);
    }
  }, []);

  return (
    <Suspense fallback={<div />}>
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
              <Route path="/" element={<MainScreen />} />
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
