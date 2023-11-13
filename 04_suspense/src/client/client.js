// startup point for the client side application
import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { Routes } from './Routes'

hydrateRoot(
  document.querySelector('#root'),
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
)
