import React from 'react';
import Header from './Header'
import Search from './Search'
import AudioBook from './AudioBook'
import '../assets/styles/App.scss'

const App = () => (
  <>
    <Header />
    <h1 className="hero_title">Audiobook Control Center</h1>
    <Search />
    <div className="audiobook_box">
      <AudioBook 
        title="Zero to One" 
        duration="23244" 
        author="Peter Thiel" 
        narrators="Edward Norton"
        isOriginal="Original"
        id="1242"
        version="2"
      />
      <AudioBook 
        title="Zero to One 2" 
        duration="23244" 
        author="Peter Thiel" 
        narrators="Edward Norton"
        isOriginal="Original"
        id="1242"
        version="2"
      />
      <AudioBook 
        title="Zero to One 3" 
        duration="23244" 
        author="Peter Thiel" 
        narrators="Edward Norton"
        isOriginal="Original"
        id="1242"
        version="2"
      />
    </div>
  </>
)

export default App;