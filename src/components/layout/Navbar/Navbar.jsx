import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsCart } from "react-icons/bs";
import './Navbar.css'
import { useDataContext } from '../../../context/DataProvider/DataProvider';


const Navbar = () => {

    const { totalQuantity } = useDataContext()

    return (
        <nav>
            <ul className='navbar'>
                <li>
                    <NavLink className='nav-link' to='/'>
                        Productos
                    </NavLink>
                </li>
                <li>
                    <NavLink className='nav-link' to='/category/arpg'>
                        Arpg
                    </NavLink>
                </li>
                <li>
                    <NavLink className='nav-link' to='/category/jrpg'>
                        Jrpg
                    </NavLink>
                </li>
                <li>
                    <NavLink className='nav-link' to='/cart'>
                        <BsCart />
                        {totalQuantity() || 0}
                    </NavLink>
                </li>
            </ul>
            
        </nav>
    );
}

export default Navbar;
