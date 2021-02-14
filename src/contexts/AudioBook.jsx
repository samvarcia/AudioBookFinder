import React, { createContext, useState } from "react";
import { AudioBook } from "../api/index";

const AudioBookContext = createContext({
  audioBooks: [],
  singleAudioBook: undefined,
  searchAudioBookField: "",

  createAudioBook: () => {},
  updateAudioBook: () => {},
  deleteAudioBook: () => {},

  searchAudioBooks: () => {},
  fetchSingleAudioBook: () => {},
  setSearchAudioBookField: () => {},
});

export default function AudioBookProvider({ children }) {
  const [audioBooks, setAudioBooks] = useState([]);
  const [singleAudioBook, setSingleAudioBook] = useState({});
  const [searchAudioBookField, setSearchAudioBookField] = useState("");

  function createAudioBook() {}
  function updateAudioBook() {}
  function deleteAudioBook() {}
  async function searchAudioBooks() {
    let { items } = await AudioBook.searchAudioBooks(searchAudioBookField);
    items = items.map(({ fields, sys }) => {
      const newItem = {};
      Object.keys(fields).forEach(
        (key) => (newItem[key] = fields[key]["es-MX"])
      );
      newItem["sysId"] = sys?.id;
      newItem["sysVersion"] = sys?.version;

      return newItem;
    });
    console.log(items);
    setAudioBooks(items);
  }
  function fetchSingleAudioBook() {}

  const store = {
    audioBooks,
    singleAudioBook,
    searchAudioBookField,
    setSearchAudioBookField,
    createAudioBook,
    updateAudioBook,
    deleteAudioBook,
    searchAudioBooks,
    fetchSingleAudioBook,
  };
  return (
    <AudioBookContext.Provider value={store}>
      {children}
    </AudioBookContext.Provider>
  );
}

export { AudioBookContext, AudioBookProvider };
