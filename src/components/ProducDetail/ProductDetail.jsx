import { getFirestore, doc, getDoc} from 'firebase/firestore';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product'

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
