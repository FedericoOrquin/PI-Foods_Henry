import React, { useEffect } from 'react'

import { Link } from 'react-router-dom'
import Searchbar from '../Searchbar/Searchbar'
import './navbar.css'

export default function Navbar() {
    const [show, setShow] = React.useState('')
    useEffect(() => {}, [show])
    return (
        <header className="headerContainer">
            <p className="headerLogo" >Foody App</p>
            <Searchbar setShow={setShow} />
            <Link to='/recipes'><button className="headerCreate" >Create recipe</button></Link>
        </header>
    )
}
