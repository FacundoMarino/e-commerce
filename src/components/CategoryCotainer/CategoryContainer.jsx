import React, {useState, useEffect} from 'react';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import { useParams, Link } from 'react-router-dom'
import Card from '../Card/Card';

const CategoryContainer = () => {


    const [ data, setData ] = useState([])
    const { categoryId } = useParams()  

    useEffect (() => {
        
        const db = getFirestore()
        const queryCollection = collection(db, 'items');    
        const queryCategoryId = query(queryCollection, where("category", "==", categoryId))
            getDocs(queryCategoryId)
            .then(resp => setData(resp.docs.map(item => ({id: item.id, ...item.data() }))))
       
           }, [categoryId])

    return (
        <>

            {
            data.map(element => 
            <Link to={`/${element.id}`}> 
                <Card className='container-cards' key={element.id} data={element} />
            </Link>)
            }
    
        </>
    );
}

export default CategoryContainer;
