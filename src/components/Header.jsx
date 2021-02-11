import React from 'react'
import BeekLogo from '../assets/img/BeekLogo.svg'
import '../assets/styles/components/Header.scss'

const Header = () => {
  return(
    <header>
      <img src={BeekLogo} alt="Beek Logo's"/>
    </header>
  )
}

export default Header;