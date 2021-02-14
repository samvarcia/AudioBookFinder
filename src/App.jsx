import React, { useContext } from "react";

import { AudioBookContext } from "./contexts/AudioBook";

import Header from "./components/Header";
import Search from "./components/Search";
import AudioBook from "./components/AudioBook";

import "./assets/styles/App.scss";

const App = () => {
  const { audioBooks } = useContext(AudioBookContext);

  return (
    <>
      <Header />
      <h1 className="hero_title">Audiobook Control Center</h1>
      <Search />
      <div className="audiobook_box">
        {/* <AudioBook
          title="Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future"
          duration="23244"
          author="Ashlee Vance"
          narrators="Fred Sanders"
          isOriginal="Original"
          id="1zoOeGhSXyLa72y7osjaCt"
          version="2"
        /> */}
        {audioBooks.map((audioBook, index) => (
          <React.Fragment key={index}>
            <AudioBook {...audioBook} />
          </React.Fragment>
        ))}
      </div>
    </>
  );
};
export default App;
