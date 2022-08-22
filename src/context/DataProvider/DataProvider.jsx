import React, {  useState, useContext } from 'react';


const dataContext = React.createContext()

export const useDataContext = () =>  useContext(dataContext)

const DataProvider = ({ children }) => {

    const [ cart, setCart ] = useState([])

    const addCart = (product, newQuantity) => {

        let cartEdit;
       
        let productFind = cart.find(prod => prod.id === product.id)
        
        if(productFind){
            productFind.quantity += newQuantity 
            cartEdit = [...cart]
        }else{
            productFind = {...product, quantity: newQuantity}
            cartEdit = [...cart, productFind]
        }

        setCart(cartEdit)
    }


  

    const deleteProduct = (id) => {

        setCart(cart.filter(element => element.id !== id))
    }

    const totalPrice = () => {

        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0)

    }


    const totalQuantity = () => {

        return cart.reduce((prev, curr) => prev + curr.quantity, 0)
    }



    return (
        <>
            <dataContext.Provider value={{

                cart,
                addCart,                
                deleteProduct,
                totalPrice,
                totalQuantity

                }}>

                {children}
            </dataContext.Provider>
        </>
            
        );
}

export default DataProvider;
