import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "../node_modules/font-awesome/css/font-awesome.min.css"
import './index.css'

import App from './App.jsx'
import Comp1 from './components/Comp1.jsx'
import Comp3 from "./components/Comp3.jsx"
import Internal from './components/Internal.jsx'
import External from "./components/External.jsx"
import Global from './components/Global.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Global />
  </StrictMode>,
)
