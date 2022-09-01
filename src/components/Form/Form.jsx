import './Form.css'
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import { useDataContext } from '../../context/DataProvider/DataProvider';
import React, {Fragment, useState} from 'react';
import Swal from 'sweetalert2';

const Form = () => {

    const {cart, totalPrice} = useDataContext(  )


    const [datos, setDatos] = useState({
        nombre: '',
        email: '',
        direccion: '',
        telefono: '',
    })


    const handleInputChange = (event) => {       
        setDatos({
            ...datos, 
            [event.target.name] : event.target.value,
            
            items: cart.map(product => 
                ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity })),
                totalPrice: totalPrice() })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        const db = getFirestore()
        const orderCollection = collection(db, 'orders');
        addDoc(orderCollection, datos);
        Swal.fire(
            '¡Tu CheckOut se ha realizado correctamente!',
            'Se ha enviado tu pedido',
            'success'
         )
    }

    return (
        <Fragment >
            <div className='container'>
                <form className="screen" onSubmit={enviarDatos}>
                    <div className='screen-body-item left'>
                        <div className='screen-body'>
                            <div className='app-title'>
                                <span>CheckOut</span>
                            </div>
                    </div>
                </div>
                <div className='screen-body-item'>
                    <div className='app-form'>
                        <div className="app-form-group">
                            <input type="text" placeholder="Nombre" className="app-form-control" onChange={handleInputChange} name="nombre"></input>
                        </div>
                        <div className="app-form-group">
                            <input type="text" placeholder="Direccion" className="app-form-control" onChange={handleInputChange} name="direccion"></input>
                        </div>
                        <div className="app-form-group">
                            <input type="text" placeholder="Email" className="app-form-control" onChange={handleInputChange} name="email"></input>
                        </div>
                        <div className="app-form-group">
                            <input type="text" placeholder="Telefono" className="app-form-control" onChange={handleInputChange} name="telefono"></input>
                        </div>
                    </div>
                </div>
                    <button type="submit" className="app-form-button">Enviar</button>
                 </form>
          
            </div>
        </Fragment>
    );
}
 
export default Form;