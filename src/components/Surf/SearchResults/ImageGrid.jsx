import React from 'react'
import Image from './Image'
import Loader from '../../UI/Loader'

const ImageGrid = ({ isLoading, images }) => {
    return isLoading ? (
        <Loader />
      ) : (
        <section className='cards'>
          {images.map((image) => (
        <Image key={image.id} image={image}></Image>
      ))}
        </section>
      )
}

export default ImageGrid
