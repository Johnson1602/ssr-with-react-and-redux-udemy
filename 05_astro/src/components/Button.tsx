import React from 'react'

export default function Button() {
  function logToConsole() {
    console.log('=== Hi there')
  }

  console.log("=== I'm hydrated!")

  return <button onClick={() => logToConsole()}>Press me!</button>
}
