import React from 'react'

const Image = ({ image }) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={image.largeImageURL} alt='N/A' />
        </div>
        <div className='card-back'>
          <h1><span role='img' aria-label='information'>ℹ️</span>nfo</h1>
          <ul>
            <li>
            <span role='img' aria-label='Image credits'>📸 </span> credits: {image.user}
            </li>
            <li>
              <a className ='link' href={image.largeImageURL} target='_blank' rel='noopener noreferrer'><span role='img' aria-label='Open Image in new tab'>↗️ </span> full HD</a>
            </li>
            <li>
            <span role='img' aria-label='Liked by'>❤️ </span>{image.likes}
            </li>
            <li>
              <span role='img' aria-label='Downloads'>⬇️ </span>{image.downloads}
            </li>
            <li>
                {`#${image.tags.split(' ').join(' #')}`}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Image
