import React, { useState, useLayoutEffect } from 'react'
import axios from 'axios'
import Header from '../src/components/UI/Header'
import './App.css'
import ImageGrid from './components/Surf/SearchResults/ImageGrid'
import SearchBar from './components/Surf/Search/SearchBar'

const App = () => {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')
  const API_KEY = '28554816-1dcc1d278d103e9e16d599a07'

  
  useLayoutEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      const result = await axios(
        `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&per_page=48`
      )
      setImages(result.data.hits)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])
  
  const queryFunction = (q) =>{
    setQuery(q)
  }
  
  return (
    <div className='container'>
      <Header />
      <SearchBar getQuery={(queryFunction)} />
      <ImageGrid isLoading={isLoading} images={images} />
    </div>
  )
}

export default App
