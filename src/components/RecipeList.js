import React from 'react'
import RecipeItem from './RecipeItem'
import Error from './Error'

const RecipeList = ({ recipes, error }) => {

    const recipe = recipes.map(recipe => (
        <RecipeItem recipe={recipe} />
    ))

    return (
        <div className="grid">
            {recipe}
            {error === true ? <Error text="Please enter a recipe" /> : null}
        </div>
    )
}

export default RecipeList
