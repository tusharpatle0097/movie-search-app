import React from 'react'
import Routing from './components/routing/Routing'
import './App.css'
import CallApi from './components/context/CallApi'
import DarkModeTheme from './components/context/DarkModeTheme'

const App = () => {
  return (
    <div>
      <DarkModeTheme>
        <CallApi>
          <Routing />
        </CallApi>
      </DarkModeTheme>
    </div>
  )
}

export default App