import React, { useState } from 'react'

const Search = ({ setQuery }) => {
    const [search, setSearch] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        setQuery(search)
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search recipe..." />
            <button>Search</button>
        </form>
    )
}

export default Search
