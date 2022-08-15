import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsCart } from "react-icons/bs";
import './Navbar.css'


const Navbar = () => {
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
                    <NavLink className='nav-link' to='/'>
                        <BsCart />
                    </NavLink>
                </li>
            </ul>
            
        </nav>
    );
}

export default Navbar;
