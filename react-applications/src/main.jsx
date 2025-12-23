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
import State5 from './components/State5.jsx'
import Parent from "./components/Parent.jsx"
import Events from './components/Events.jsx'
import Parent1 from './components/Parent1.jsx'
import Master from './components/Master.jsx'
import Major from './components/Major.jsx'
import Miniproject1 from './components/Miniproject1.jsx'
import Events1 from './components/Events1.jsx'
import UseRefHook from "./components/UseRefHook.jsx"
import Demo1 from './components/Demo1.jsx'
import Demo2 from './components/Demo2.jsx'
import Demo3 from './components/Demo3.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Demo3></Demo3>
  </StrictMode>,
)
