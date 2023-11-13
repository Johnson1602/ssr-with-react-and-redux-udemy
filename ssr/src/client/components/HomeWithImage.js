import React from 'react'
import { images } from './images'

export const Home = (props) => {
  const { isSSR } = props

  return (
    <main>
      <div>Welcome to homepage!</div>
      <button onClick={() => console.log('=== Hi there')}>Press me!</button>
      {images.map((image, index) => {
        return (
          <img
            key={index}
            src={image}
            style={{ height: 200, display: 'block' }}
            loading='lazy'
          />
        )
      })}
    </main>
  )
}
