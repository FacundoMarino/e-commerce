import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom'
import { getDocs, getFirestore, collection, query, orderBy} from 'firebase/firestore';
import Card from '../Card/Card';
import './CardContainer.css'


const CardContainer = () => {

    const [ data, setData ] = useState([])
    const [ order, setOrder] = useState(1)


    const orderByHandler = (ev) => {
        setOrder(Number(ev.target.value))
    }

    useEffect (() => {
        const db = getFirestore()
        const queryCollection = collection(db, 'items');
       
        if(order === 1){          

            getDocs(query(queryCollection, orderBy('price', 'desc')))                
           .then(resp => setData(resp.docs.map(item => ({id: item.id, ...item.data() }))))             
        }
        else{
            getDocs(query(queryCollection, orderBy('price', 'asc')))                
            .then(resp => setData(resp.docs.map(item => ({id: item.id, ...item.data() }))))
        }
        
           }, [order])

           console.log(data)

    return (
        <>
            <select onChange={orderByHandler}>
                <option value={1}>Mayor Precio</option>
                <option value={2}>Menor Precio</option>
            </select>

            {
            data.map(element => 
            <Link to={`/${element.id}`}> x
                <Card className='container-cards' key={element.id} data={element} />
            </Link>)
            }
    
        </>
    );
}

export default CardContainer;


