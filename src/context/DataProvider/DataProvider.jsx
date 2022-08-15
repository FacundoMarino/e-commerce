import React, {  useState, useContext } from 'react';


const dataContext = React.createContext()

export const useDataContext = () => {
     useContext(dataContext)
}

const DataProvider = ({ children }) => {

    const [ cart, setCart ] = useState([])

    

    return (
        <>
            <dataContext.Provider value={{
                cart,
                
                }}>
                {children}
            </dataContext.Provider>
        </>
            
        );
}

export default DataProvider;
