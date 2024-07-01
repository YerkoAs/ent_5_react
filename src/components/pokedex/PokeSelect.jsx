import React, { useEffect, useRef } from 'react'
import useFetch from '../../hooks/useFetch'
import './styles/pokeSelect.css'

const PokeSelect = ({settypeFilter}) => {
  
    const[types, getTypes] = useFetch()

  

  useEffect(() => {

    const url = 'https://pokeapi.co/api/v2/type'
    getTypes(url)
  }, [])
  
  const valueSelect = useRef()

  const handleChange = () =>{
    settypeFilter(valueSelect.current.value)
  }
    return (
    <select className='pokeselect__select' onChange={handleChange} ref={valueSelect}>
        <option value="">All pokemons</option>
        {
            types?.results.map(type => (
                <option key={type.url} value={type.url}>{type.name}</option>
            ))
        }
    </select>
  )
}

export default PokeSelect