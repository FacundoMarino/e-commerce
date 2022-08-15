import React, {  useState, useContext } from 'react';
import { getAllProducts } from '../../components/utilities/launches';
import { getDocs  } from 'firebase/firestore';

const dataContext = React.createContext()

export const useDataContext = () => {
     useContext(dataContext)
}

const DataProvider = ({ children }) => {

    const [ data, setData] = useState([])


            const productCollection = getAllProducts()   

            getDocs(productCollection)
            .then(resp => setData(resp.docs.map(item => ({id: item.id, ...item.data()}))))
         



    return (
        <>
            <dataContext.Provider value={data}>
                {children}
            </dataContext.Provider>
        </>
            
        );
}

export default DataProvider;
