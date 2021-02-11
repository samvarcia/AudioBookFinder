import React from 'react';
import Header from './Header'
import Search from './Search'
import '../assets/styles/App.scss'

const App = () => (
  <>
    <Header />
    <h1 className="hero_title">Centro de control de Audiolibros</h1>
    <Search />
  </>
)

export default App;