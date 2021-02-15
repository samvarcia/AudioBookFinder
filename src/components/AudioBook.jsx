import React from "react";
import "../assets/styles/components/AudioBook.scss";

const AudioBook = (props) => {
  const {
    title,
    duration,
    authors,
    narrators,
    is_original: isOriginal,
    sysId: id,
    cover,
    sysVersion: version,
  } = props;
  return (
    <div className="audiobook">
      <div className="audiobook_container">
        <div
          className="cover"
          style={{
            backgroundImage: `url(${cover})`,
          }}
        ></div>

        <div className="audiobook_info">
          <div className="left_info">
            <h1 className="AudioBookTitle">{title}</h1>
            <h2>
              Duration:{" "}
              <span className="value">
                {(duration / 60 / 60).toFixed(1)} hrs
              </span>
            </h2>
            <h2>
              Author: <span className="value">{authors.join(", ")}</span>
            </h2>
            <h2>
              Narrators: <span className="value">{narrators.join(", ")}</span>
            </h2>
          </div>
          <div className="right_info">
            <h2>{isOriginal}</h2>
            <h2>
              Id: <span className="value">{id}</span>
            </h2>
            <h2>
              Version: <span className="value">{version}</span>
            </h2>
          </div>
        </div>

        <div className="action_buttons">
          <button className="create-button">Edit</button>
          <button className="cancel-button toggle-button">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default AudioBook;
