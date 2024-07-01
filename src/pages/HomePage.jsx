import React, { useRef } from 'react'
import { setTrainer } from '../store/slices/trainer.slice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './styles/homePage.css'

const HomePage = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const textInput = useRef()

    const handleSubmit = (event) => {

        event.preventDefault()
        dispatch(setTrainer(textInput.current.value.trim()))
        textInput.current.value = '';
        navigate('/pokedex')
    }

  return (
    <div  className='homepage__container'>
        <img  className='homepage__img' src="https://pokeapilaunchx.netlify.app/Assets/img/logo.png" alt="pokedex logo" />
        <div className='homepage__content'>
          <h2 className='homepage__title'> Hi trainer !!! </h2>
          <p className='homepage__phrase'>to start give me your name</p>
          <form className='homepage__form' onSubmit={handleSubmit}>
              <input className='homepage__input' placeholder='your name....' type="text" ref={textInput} />
              <button className='homepage__btn'>Start</button>
          </form>
        </div>
    </div>
  )
}

export default HomePage