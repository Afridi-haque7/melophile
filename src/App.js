import { useState, useEffect } from "react";
import Player from "./components/Player";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Github from "./components/Github";
import { BrowserRouter, Route, Switch, Link, Routes } from "react-router-dom";

function App() {
  const [songs] = useState([
    {
      title: "Heat Waves",
      artist: "Glass Animals",
      img_src: "./images/Heat-Waves.jpg",
      src: "./music/Heat Waves.mp3",
    },
    {
      title: "Shayad",
      artist: "Arijit Singh",
      img_src: "./images/Shayad.jpg",
      src: "./music/Shayad.mp3",
    },
    {
      title: "Dusk Till Dawn",
      artist: "ZAYN ft. Sia",
      img_src: "./images/Dusk-Till-Dawn.jpeg",
      src: "./music/Dusk Till Dawn.mp3",
    },
    {
      title: "Filhall",
      artist: "B. Parak",
      img_src: "./images/Filhall.jpg",
      src: "./music/Filhall.mp3",
    },
    {
      title: "Watermelon Sugar",
      artist: "Harry Styles",
      img_src: "./images/Watermelon-Sugar.jpg",
      src: "./music/Watermelon Sugar.mp3",
    },
    {
      title: "Raabta",
      artist: "Arijit Singh",
      img_src: "./images/Raabta.jpg",
      src: "./music/Raabta.mp3",
    },
    {
      title: "Lovely",
      artist: "Billie Eilish",
      img_src: "./images/Lovely.jpg",
      src: "./music/Lovely.mp3",
    },
    {
      title: "Arcade",
      artist: "Duncan Laurance",
      img_src: "./images/Arcade.jpg",
      src: "./music/Arcade.mp3",
    },
    {
      title: "Madrid Anthem",
      artist: "RedOne",
      img_src: "./images/Madrid.jpg",
      src: "./music/Madrid.mp3",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, songs.length]);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <Player
                currentSongIndex={currentSongIndex}
                setCurrentSongIndex={setCurrentSongIndex}
                nextSongIndex={nextSongIndex}
                songs={songs}
              />
            }
          />

          <Route path="/about" element={<About />} />
          <Route path="/github" element={<Github />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
