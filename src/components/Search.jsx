import React from 'react'
import '../assets/styles/components/Search.scss'
import { Search } from 'react-feather';
import AddButton from './AddButton'


export default function SearchBar(){
  return(
    <div className="search_container">
      <input type="text" placeholder="Buscar audiolibro..."/>
      <button className="search" type="submit"><Search color="white" /></button>
      <AddButton />
    </div>
  )
}