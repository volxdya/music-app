import './GenreCard.scss';

interface Props {
  title: string;
}

export function GenreCard({ title }: Props) {
  return <div className="genre-card mt-3">{title}</div>;
}
