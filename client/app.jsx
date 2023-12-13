// Import and use main fonts
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import React from 'react'
import { createRoot } from 'react-dom'

import MainApp from './Components/MainApp.jsx'

const root = document.getElementById('root')
createRoot(root).render(<MainApp />)
