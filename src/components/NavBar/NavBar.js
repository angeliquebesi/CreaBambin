import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/navbar.css';

function NavBar() {
  return (
    <div className='navbar'>
      <Link to='/'>CréaBambins</Link>
        <Link to='/Categories/0'>Catégories</Link>
        <Link to='/Contact'>Me contacter</Link>
        <Link to='/Login'>Administrateur</Link>
    </div>
  )
}

export default NavBar;