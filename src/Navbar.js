import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul className='new_list'>
            <Link className='new_items' to='/'>Home</Link>
            <Link className='new_items' to='/cardViewer'>Card</Link>
            <Link className='new_items' to='/imageViewer'>Image</Link>
            <Link className='new_items' to='/videoViewer'>Video</Link>
            <Link className='new_items' to='/weatherViewer'>Weather</Link>
            <Link className='new_items' to='/accordion'>Accordion</Link>
            <Link className='new_items' to='/wikipediaApi'>Wiki</Link>
            <Link className='new_items' to='/translate'>Translator</Link>
            <Link className='new_items' to='/dropdown'>Dropdown</Link>
            </ul>
        </nav>
    )
}
export default Navbar;