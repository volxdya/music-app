import "./GenreCard.scss";
import { Play } from "@/icons/Play.tsx";

interface Props {
  title: string;
}

export function GenreCard({ title }: Props) {
  return (
    <div className="genre-card mt-3">
      <div className="genre-card-wrapper d-flex align-items-center">
          <Play />
          <p>{title}</p>
      </div>
    </div>
  );
}
