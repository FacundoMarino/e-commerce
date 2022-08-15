import  { getFirestore, collection } from "firebase/firestore"

export const getAllProducts = () => {

        const db = getFirestore()
        const dbProducts =  collection(db, 'items')
       return dbProducts     

}

export const getProductsById = () => {


}

