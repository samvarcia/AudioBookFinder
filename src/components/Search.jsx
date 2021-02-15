import React, { useContext, useState } from "react";
import Modal from "./Modal";
import "../assets/styles/components/Search.scss";
import { Search } from "react-feather";
import { AudioBookContext } from "../contexts/AudioBook";

function SearchBar() {
  const [show, setShow] = useState(false);
  const { setSearchAudioBookField, searchAudioBooks } = useContext(
    AudioBookContext
  );

  const showModal = () => setShow((prevState) => !prevState);
  async function handleSearchChange(e) {
    e.persist();
    setSearchAudioBookField(e.target.value);
  }
  return (
    <div className="search_container">
      <input
        className="search_input"
        type="text"
        onChange={handleSearchChange}
        placeholder="Search AudioBook..."
      />
      <button onClick={searchAudioBooks} className="search" type="submit">
        <Search color="white" />
      </button>
      <button
        className="toggle-button"
        id="centered-toggle-button"
        onClick={showModal}
      >
        {" "}
        Create{" "}
      </button>
      <Modal onClose={showModal} show={show}>
        <form className="ModalForm" action="">
          <label htmlFor="title" className="label">
            <span>Title</span>
            <input
              placeholder="Eg. Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future"
              type="text"
              name=""
              id="title"
              className="formInput"
            />
          </label>
          <label htmlFor="author" className="label">
            <span>Author</span>
            <input
              placeholder="Eg. Ashlee Vance"
              type="text"
              name=""
              id="author"
              className="formInput"
            />
          </label>
          <label htmlFor="narrators" className="label">
            <span>Narrators</span>
            <input
              placeholder="Eg. Fred Sanders"
              type="text"
              name=""
              id="narrators"
              className="formInput"
            />
          </label>
          <label htmlFor="" className="label">
            <span>Original</span>
            <select name="original" id="original">
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </label>
          <label htmlFor="duration" className="label">
            <span>Duration</span>
            <input
              placeholder="Duration in seconds"
              type="text"
              name=""
              id="duration"
              className="formInput"
            />
          </label>
          <label htmlFor="cover" className="label">
            <span>Cover</span>
            <input
              placeholder="Url of cover image"
              type="text"
              name=""
              id="cover"
              className="formInput"
            />
          </label>
          <div className="id_version_container">
            <label htmlFor="id" className="label">
              <span>Id</span>
              <input
                placeholder="ID"
                type="text"
                name=""
                id="id"
                className="formInput"
              />
            </label>
            <label htmlFor="version" className="label">
              <span>Version</span>
              <input
                placeholder="Current version"
                type="text"
                name=""
                id="version"
                className="formInput"
              />
            </label>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default SearchBar;
