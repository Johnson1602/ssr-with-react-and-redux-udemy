import React from 'react'
import { images } from './images'

export const Home = () => {
  return (
    <main>
      <div>Welcome to homepage!</div>
      <button onClick={() => console.log('=== Hi there')}>Press me!</button>
    </main>
  )
}
