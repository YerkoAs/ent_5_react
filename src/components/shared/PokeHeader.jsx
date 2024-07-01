import React from 'react'
import './styles/pokeHeader.css'

const PokeHeader = () => {
  return (
    <div className='pokeheader'>
        <div className='pokeheader__red'>
            <figure className='pokeheader__img'>
                <img src="https://pokeapilaunchx.netlify.app/Assets/img/logo.png" alt="pokedex logo" />
            </figure>
        </div>
        <div className='pokeheader__black'></div>
        <div className='pokeheader__outercircle'>
            <div className='pokeheader__innercircle'></div>
        </div>
    </div>
  )
}

export default PokeHeader