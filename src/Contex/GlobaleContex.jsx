import { createContext, useState } from "react"


export const GlobaleContex = createContext();

const GlobaleState = ({ children }) => {
    const [aboutPanel , setAboutPanel] = useState(false);
    
  return (
    <GlobaleContex.Provider
    value={{
        setAboutPanel,
        aboutPanel
    }}
    >
        {children}
    </GlobaleContex.Provider>
  )
}

export default GlobaleState
