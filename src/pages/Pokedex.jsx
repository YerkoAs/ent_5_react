import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import useFetch from '../hooks/useFetch';
import PokeCard from '../components/pokedex/PokeCard';
import PokeSelect from '../components/pokedex/PokeSelect';
import './styles/pokedex.css'
import Pages from '../components/pokedex/Pages';

const Pokedex = () => {

    const trainer = useSelector((store) => store.trainer)

    const [inputValue, setinputValue] = useState('')
    const [typeFilter, settypeFilter] = useState('')

    const [pokemons, getPokemons, getType] = useFetch()
    const [page, setpage] = useState(1)

    useEffect(() => {
      if (typeFilter) {
        getType(typeFilter)
      
      }else{
        const url = 'https://pokeapi.co/api/v2/pokemon/?limit=1302';
      getPokemons(url)
      }
    }, [typeFilter])

    const textInput = useRef()

    const handleSubmit = (event) => {
      event.preventDefault()
      setinputValue(textInput.current.value.trim().toLowerCase())
      textInput.current.value = ''
    }
    
    console.log(pokemons)

    const cbFilter = (pokes) => {
      return pokes.name.includes(inputValue)
    }

    const quantity = 10
  const total = Math.ceil(pokemons?.results.length/quantity)
  console.log(total)
  const pagination = () => {
    const end = quantity * page
    const start = end - quantity
    const resi = pokemons?.results.slice(start, end)
    return [resi]
  }
    

  return (
    <div className='pokedex'>
        <h3 className='pokedex__wave'><span>Welcome {trainer},</span> here you can find your favorite pokemon</h3>
        <div className='pokedex__filters'>
          <form className='pokedex__form' onSubmit = {handleSubmit}>
            <input className='pokedex__input' placeholder='Search a pokemon' type="text" ref={textInput} />
            <button  className='pokedex__button'>Search</button>
          </form>
          <PokeSelect
          settypeFilter = {settypeFilter}
          />
        </div>

        <div className='pokedex__container'>
            {
                pagination()[0]?.filter(cbFilter).map(poke => (
                    <PokeCard
                        key={poke?.url}
                        url = {poke.url}
                    />
                ))
            }
        </div>
        
        <div>
          <Pages
              page={page}
              setpage={setpage}
              total={total}
            />
        </div>

    </div>
  )
}

export default Pokedex