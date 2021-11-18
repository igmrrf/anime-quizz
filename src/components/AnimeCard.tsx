import { FC } from "react";

interface IProps {
  anime: {
    end_date: string;
    episodes: number;
    image_url: string;
    mal_id: number;
    members: number;
    rank: number;
    score: number;
    start_date: string;
    title: string;
    type: string;
    url: string;
  };
}

const AnimeCard: FC<IProps> = ({ anime }) => {
  return (
    <article className='anime-card'>
      <a href={anime.url} target='_blank' rel='noreferrer noopener'>
        <figure>
          <img src={anime.image_url} alt={anime.title} />
        </figure>
        <h3>{anime.title}</h3>
      </a>
    </article>
  );
};

export default AnimeCard;
