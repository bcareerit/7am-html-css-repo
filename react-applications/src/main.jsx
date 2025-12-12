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
import State1 from './components/State1.jsx'
import State2 from './components/State2.jsx'
import State3 from './components/State3.jsx'
import State4 from './components/State4.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <State2></State2>
  </StrictMode>,
)
