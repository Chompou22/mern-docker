import axios from "axios";
import dotenv from "dotenv";
import React, { useEffect, useState } from "react";

dotenv.config();

interface Anime {
  _id: string;
  title: string;
  description: string;
  link: string;
}

function Home() {
  const [anime, setAnime] = useState<Anime[]>([]);

  useEffect(() => {
    axios
      .get<Anime[]>(`${process.env.REACT_APP_API_URL as string}/api/anime`)
      .then((res) => {
        setAnime(res.data);
      })
      .catch((err) => {
        console.error("Error fetching anime:", err);
      });
  }, []);

  return (
    <main className="container">
      <h1 className="heading">Explore</h1>
      <p className="sub_heading">List of anime to watch</p>

      <ul className="anim_list">
        {anime.length > 0 ? (
          anime.map((anim) => (
            <li key={anim._id} className="anime_card">
              <div className="anime_info">
                <h4>{anim.title}</h4>
                <p>{anim.description}</p>
              </div>

              <div className="anime_link">
                <a
                  href={anim.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  Watch
                </a>
              </div>
            </li>
          ))
        ) : (
          <p className="no_result">Oops, No anime available</p>
        )}
      </ul>
    </main>
  );
}

export default Home;
