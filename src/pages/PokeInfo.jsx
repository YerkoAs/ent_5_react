import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import './styles/pokeInfo.css'

const PokeInfo = () => {

const[pokemon, getPokemon]= useFetch()

  const { id } = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`

  useEffect(() => {
    getPokemon(url)

  }, [])
  
  const name = pokemon?.name[0].toUpperCase() + pokemon?.name.slice(1)

  const navigate = useNavigate()

  const handleClick = () => {

    navigate('/pokedex/')
}

  return (
    <>
    <button className='pokeinfo__button' onClick={handleClick}>Return</button>
    <section className='pokeinfo'>
      
      <div className={`pokeinfo__background b${pokemon?.types[0].type.name}`} >
      <figure className='pokeinfo__info'>
        <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="pokemon image" />
      </figure>
      </div>
      <p className = {`pokeinfo__num b${pokemon?.types[0].type.name}`} > {`#${pokemon?.id}`} </p>
      <h2 className = {`pokeinfo__name b${pokemon?.types[0].type.name}`} >{name}</h2>
      <ul className='pokeinfo__char' >
        <li><span>Weight </span> <span>{pokemon?.weight/10} Kg </span></li>
        <li><span>Height </span> <span>{pokemon?.height/10} m </span></li>
      </ul>
      <br /><br />
      <div className='pokeinfo__lists'>
        <div className='pokeinfo__types'>
          <h2>Type</h2>
          <div className='pokeinfo__types__ul'>
            {
              pokemon?.types.map(type => (
                <ul>
                  <li className= {`t${type.type.name}`} >{type.type.name}</li>
                </ul>
              ))
            }
          </div>
        </div>

        <div className='pokeinfo__abilities'>
          <h2>Abilities</h2>
          <div className='pokeinfo__abilities__ul'>
            {
              pokemon?.abilities.map(ability => (
                
                <ul>
                  <li>{ability.ability.name}</li>
                </ul>
              ))
            }
          <div/>
        </div>
      </div>
      </div>
      <h2 className='pokeinfo__stats__name'>Stats</h2>
      <ul className='pokeinfo__stats'>
        {
          pokemon?.stats.map(stat => (
            <li  className='pokeinfo__stats-item' key={stat.stat.url}> 
              <span>{stat.stat.name} : </span> <span>{stat.base_stat} / 250</span>
              <div className='outerbar'>
                <div className='innerbar' style={{width:`${stat.base_stat/2.5}%`}}></div>
              </div>
            </li>
          ))
        }
      </ul>
    </section>

    <section className='pokeinfo'>
      <h2 className='pokeinfo__moves__name'>Movements</h2>
      <div className='pokeinfo__moves' >
      {
        pokemon?.moves.map(move => (
          
          <ul className='pokeinfo__moves__ul' >
            <li>{move.move.name}</li>
          </ul>
        ))
      }
      </div>
    </section>
    </>

    
    
  )
}

export default PokeInfo