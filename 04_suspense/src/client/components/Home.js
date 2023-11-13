import React from 'react'
import { useState, lazy, Suspense } from 'react'
import { Loading } from './HeavyLoadedComponent'

const LazyComponent = lazy(() =>
  delayForDemo(import('./HeavyLoadedComponent.js'))
)

export function Home() {
  const [showMessage, setShowMessage] = useState(false)

  return (
    <main>
      <h1>Welcome to homepage!</h1>
      <button
        onClick={() => {
          console.log('=== Hi there')
          setShowMessage(!showMessage)
        }}
      >
        Press me!
      </button>

      {showMessage && (
        <Suspense fallback={<Loading />}>
          <LazyComponent />
        </Suspense>
      )}
    </main>
  )
}

// Add a fixed delay so you can see the loading state
function delayForDemo(promise) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000)
  }).then(() => promise)
}
