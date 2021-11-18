import { useState, useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import MainContent from "./components/MainContent";

interface IState {
  animes: {
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

  search: string;
}

const App = () => {
  const [animeList, setAnimeList] = useState<IState["animes"]>([]);
  const [topAnime, setTopAnime] = useState<IState["animes"]>([]);
  const [search, setSearch] = useState<string>("");

  const getTopAnime = async () => {
    const temp = await fetch("https://api.jikan.moe/v3/top/manga/1/bypopularity").then((res) => res.json());
    setTopAnime(temp.top.slice(0, 5));
  };

  const fetchAnime = async (query = "demon") => {
    // title, sort and limit can be parameters

    const temp = await fetch(
      `https://api.jikan.moe/v3/search/manga?q=${query}&order_by=title&sort=asc&limit=12`,
    ).then((res) => res.json());

    setAnimeList(temp.results);
    console.log(temp.results);
  };

  const handleSearch = (event: any) => {
    event.preventDefault();
    fetchAnime(search);
  };

  useEffect(() => {
    getTopAnime();
    fetchAnime();
  }, []);

  return (
    <div className='App'>
      <Header title={"Manga"} />
      <div className='content-wrap'>
        <Sidebar topAnime={topAnime} title={"Manga"} />
        <MainContent setSearch={setSearch} search={search} handleSearch={handleSearch} animeList={animeList} />
      </div>
    </div>
  );
};

export default App;
