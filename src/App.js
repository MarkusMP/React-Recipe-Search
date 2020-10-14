import React, { useEffect, useState } from 'react';
import Search from './components/Search'
import RecipeList from './components/RecipeList'
import axios from 'axios'
import './App.css';

const apiKey = '4ed3ab70736ce7ea66dcc231884c56f6'
const apiId = '684273b1'

function App() {
  const [recipe, setRecipe] = useState([])
  const [query, setQuery] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    if (query !== '') {
      axios.get(`https://api.edamam.com/search?q=${query}&app_id=${apiId}&app_key=${apiKey}&from=0&to=50`).then(res => {
        setRecipe(res.data.hits)
        setError(false)
      }).catch(err => {
        console.log(err)
        setError(true)
      })
      setQuery('')
    }

  }, [query])
  return (
    <div className="container">
      <Search setQuery={setQuery} />
      <RecipeList recipes={recipe} error={error} />
    </div>
  );
}

export default App;
