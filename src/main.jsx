import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Appstart from './Appstart.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Appstart />
  </StrictMode>,
)
