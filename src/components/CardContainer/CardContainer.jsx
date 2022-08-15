import React, {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom'
import { getDocs, getFirestore, query, where, collection } from 'firebase/firestore';
import Card from '../Card/Card';
import './CardContainer.css'


const CardContainer = () => {

    const [ data, setData ] = useState([])
    const { categoryId } = useParams()  

    useEffect (() => {
        const db = getFirestore()
        const queryCollection = collection(db, 'items');
       
           if (categoryId) {
       
               const queryCategoryId = query(queryCollection, where("category", "==", categoryId))
               getDocs(queryCategoryId)
               .then(resp => setData(resp.docs.map(item => ({id: item.id, ...item.data() }))))
               
           }
           else{
               
               getDocs(queryCollection)
               .then(resp => setData(resp.docs.map(item => ({id: item.id, ...item.data() })))) 
           }
       
           }, [categoryId])


    return (
        <>

            {
            data.map(element => 
            <Link to={`/product/${element.id}`}> 
                <Card className='container-cards' key={element.id} data={element} />
            </Link>)
            }
    
        </>
    );
}

export default CardContainer;
