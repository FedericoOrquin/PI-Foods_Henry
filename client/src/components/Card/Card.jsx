import { Link } from 'react-router-dom'
import React from 'react'
import './card.css'

export default function Card({ id, name, image, healthScore, diets, glutenFree, vegetarian, vegan, dairyFree }) {
    return (
        <div className="cardContainer">
            <div className="boxImage">
                <img src={image} alt={name} />
            </div>
            <div className="cardDescription">
                <p className="cardTitle" >{name}</p>
                <p className="healthScore">HealthScore: {healthScore}</p>
                <div className="dietContainer">
                        {diets?.map(diet => {
                            return (
                                <p key={diet}>✔{diet}</p>
                            )
                        })}
                        {glutenFree && !diets.includes('gluten free') && <p>✔gluten free</p>}
                        {vegan && !diets.includes('vegan') && <p>✔vegan</p>}
                        {vegetarian && !diets.includes('vegetarian') && <p>✔vegetarian</p>}
                        {dairyFree && !diets.includes('dairy free') && <p>✔dairy Free</p>}
                </div>
                <Link to={`/recipes/${id}`}  key = {id} >
                    <button className="button">Recipe detail</button>
                </Link>
            </div>
        </div>
    )
}

