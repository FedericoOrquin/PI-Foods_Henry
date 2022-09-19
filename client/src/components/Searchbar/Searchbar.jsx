import React, {useState} from 'react'

import './searchbar.css'
import {searchByName} from '../../actions/index'
import {useDispatch} from 'react-redux'

export default function Searchbar({setShow}) {
    const dispatch = useDispatch()
    const [recipe, setRecipe] = useState('')

    function handleInputChange(e) {
      e.preventDefault()
      setRecipe(e.target.value)
    }
    function handleSubmit(e) {
      e.preventDefault()
      dispatch(searchByName(recipe))
      setRecipe('')
      setShow('cargado')
    }
    function reset(){
      setShow('cargado')
    }

  return (
    <form className="searchContainer" onSubmit={e=>handleSubmit(e)}>
      <input type="text" className="searchInput" value={recipe} placeholder="Type something" onChange={e=>handleInputChange(e)} />
      <button type='submit' className="searchButton" onClick={reset}>Search</button>
    </form>
  )
}
