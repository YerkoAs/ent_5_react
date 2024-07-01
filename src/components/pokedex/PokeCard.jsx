import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
import './styles/pokeCard.css'

const PokeCard = ({url}) => {

console.log(url)

const [pokemon, getPokemon] = useFetch()
useEffect(() => {
  getPokemon(url)
}, []);

const navigate = useNavigate()

const handleClick = () => {
    navigate(`/pokedex/${pokemon.id}`)
}

console.log(pokemon) 


  return (
    <article className={`pokecard ${pokemon?.types[0].type.name}`} onClick={handleClick}>
        
        <figure className='pokecard__img' >
            <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="pokemon image" />
        </figure>
        <div className='pokecard_card'>
        <h3 className='pokecard__name' >{pokemon?.name}</h3>
        <ul className='pokecard__types' >
            {
                pokemon?.types.map((type) => (
                    <li className= {`slot${type.slot}`} key={type.type.url}>
                        {type.type.name}
                    </li>
                ))
            }
        </ul>
        <span className='pokecard__span' >Type</span>
        <hr className='pokecard__hr' />
        <ul className='pokecard__stats' >
            {
                pokemon?.stats.map(stat => (
                    !stat.stat.name.includes('special')&&
                    <li key={stat.stat.url}>
                        <span className='pokecard__stats__name'>{stat.stat.name} : </span>
                        <span className='pokecard__stats__cont'>{stat.base_stat}</span>
                    </li>
                ))
            }
        </ul>
        </div>
        
    </article>
  )
}

export default PokeCard