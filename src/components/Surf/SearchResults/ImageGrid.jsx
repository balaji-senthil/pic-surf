import React from 'react'
import Image from './Image'
import Loader from '../../UI/Loader'

var queryNotFoundMessage = (query) =>{
    return(`Your search '${query}' did not match any images.`)
}

const ImageGrid = ({ isLoading, images, query }) => {
    return isLoading ? (
        <Loader />
      ) : (
        <section className='cards'>
          {
            images.length
            ?(images.map((image) => (
                <Image key={image.id} image={image}></Image>
              )))
            :<div className='center'>{queryNotFoundMessage(query)}</div>
          }
        </section>
      )
}

export default ImageGrid

