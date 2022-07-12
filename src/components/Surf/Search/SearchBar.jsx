import React, { useState } from 'react'

const SearchBar = ({ getQuery }) => {
  const [text, setText] = useState('')
  
  const onChange = (q) => {
    setText(q)
    getQuery(q)
  }
  return (
    <section className='search'>
      <form>
        <input
          type='text'
          className='form-control'
          placeholder='Try me!'
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
      </form>
    </section>
  )
}

export default SearchBar
