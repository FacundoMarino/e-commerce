import { getFirestore, doc, getDoc} from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product'
import React, {useState, useEffect} from 'react';

const ProductDetail = () => {

    const [data, setData] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const db = getFirestore()
        const queryId = doc(db, 'items', id)
        getDoc(queryId)
        .then(resp=> setData({ id: resp.id, ...resp.data()  }))
    }, [id]);

    return (
        <Product data={data} />
        );
}

export default ProductDetail;
