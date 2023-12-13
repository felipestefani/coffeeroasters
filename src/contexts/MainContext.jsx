import { createContext, useState } from "react";

export const MainContext = createContext({})

const MainContextProvider = ({children}) => {

    const [isModalOpen, setIsModalOpen] = useState(false)

    return(
        <MainContext.Provider 
            value = {{
                isModalOpen, setIsModalOpen
            }}>
                { children }
        </MainContext.Provider>
    )
}

export default MainContextProvider