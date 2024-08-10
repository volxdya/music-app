import "./MainScreen.scss";
import { MyVibe } from "@/components/MainScreen/MyVibe/MyVibe.tsx";
import { GenresMainScreen } from "@/components/MainScreen/Genres/GenresMainScreen.tsx";
import { CardsMainScreen } from "@/components/MainScreen/Cards/CardsMainScreen.tsx";

export function MainScreen() {
  return (
    <>
      <MyVibe />
      <CardsMainScreen />
      <GenresMainScreen />
    </>
  );
}
