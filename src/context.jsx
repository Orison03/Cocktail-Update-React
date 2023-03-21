import React, { useContext } from 'react'
import { createContext } from 'react'

const AppContext = createContext()

const AppProvider = ({children}) => {
  return (
    <AppContext.Provider>
        {children}
    </AppContext.Provider>
  )
}

// globalContext
const useGlobalContext = () => {
    return useContext(AppContext)
}
export {AppContext,AppProvider}