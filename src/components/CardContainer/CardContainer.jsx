import './CardContainer.css'
import { getDocs, getFirestore, collection, query, orderBy} from 'firebase/firestore';
import { Link } from 'react-router-dom'
import Card from '../Card/Card';
import React, {useEffect, useState} from 'react';
import Select from '../Select/Select';


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

    return (
        <>
            <Select click={orderByHandler} />
                <div>
                    {
                        data.map(element =>
                            
                        <Link key={element.id} to={`/${element.id}`}>
                            <Card className='container-cards' key={element.id} data={element} />
                        </Link>)
                    }
                </div>
        </>
    );
}

export default CardContainer;