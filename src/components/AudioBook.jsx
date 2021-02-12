import React from 'react'
import '../assets/styles/components/AudioBook.scss'

const AudioBook = props => {
  const { title, duration, author, narrators, isOriginal, id, version } = props 
    return(
      <div className="audiobook">
        <div className="audiobook_container">
          <div>
            COVER
          </div>

          <div className="audiobook_info">
            <div className="left_info">
              <h1>{title}</h1>
              <h2>Duration: <span className="value">{duration}</span></h2>
              <h2>Author: <span className="value">{author}</span></h2>
              <h2>Narrators: <span className="value">{narrators}</span></h2>
            </div>
            <div className="right_info">
              <h2>{isOriginal}</h2>
              <h2>Id: <span className="value">{id}</span></h2>
              <h2>Version: <span className="value">{version}</span></h2>
            </div>
          </div>

          <div className="action_buttons">
            <button className="create-button">
              Edit
            </button>
            <button className="cancel-button toggle-button">
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
}

export default AudioBook;