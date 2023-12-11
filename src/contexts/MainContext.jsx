import { createContext, useState } from "react";

export const MainContext = createContext({})

const MainContextProvider = ({children}) => {

    const [nome, setNome] = useState('')

    return(
        <MainContext.Provider 
            value = {{
                nome, setNome
            }}>
                { children }
        </MainContext.Provider>
    )
}

export default MainContextProvider