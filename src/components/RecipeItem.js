import React from 'react'

const RecipeItem = ({ recipe }) => {

    const label = `${(recipe.recipe.label).slice(0, 20)}...`

    const recipeItems = recipe.recipe.healthLabels.map((item, index) => (
        <p>{index}: {item}</p>
    ))
    return (
        <div className="card">
            <div className="front">
                <div className="img">
                    <img src={recipe.recipe.image} alt="pizza" />
                </div>
                <div className="text">
                    <h2>{label}</h2>
                    <p>{recipe.recipe.source} </p>
                </div>
            </div>
            <div className="back">
                <div className="text">
                    <h1>{label}</h1>
                    <p>{recipe.recipe.source}</p>
                    <p> Total Calories: {(recipe.recipe.totalWeight).toFixed(2)}</p>
                    {recipeItems.slice(0, 2)}
                </div>
                <div className="bottom">
                    <a href={recipe.recipe.url} target="_blank" rel="noopener noreferrer">Recipe</a>
                </div>
            </div>
        </div>
    )
}

export default RecipeItem
