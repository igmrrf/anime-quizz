import React from "react";
import AnimeCard from "./AnimeCard";

type IProps = {
  setSearch: (text: string) => void;
  handleSearch: (e: any) => void;
  search: string;
  animeList: {
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
  }[];
};

const MainContent = ({ handleSearch, search, animeList, setSearch }: IProps) => {
  return (
    <main>
      <div className='main-head'>
        <form className='search-box' onSubmit={(e) => handleSearch(e)}>
          <input
            type='search'
            placeholder='search for an anime..'
            required
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
      <div className='anime-list'>
        {animeList.map((anime) => (
          <AnimeCard anime={anime} key={anime.mal_id} />
        ))}
      </div>
    </main>
  );
};

export default MainContent;
