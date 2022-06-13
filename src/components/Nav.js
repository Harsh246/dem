import React from 'react';
import '../styles/Nav.css';
import logo from '../media/logo2.gif';

export default function Nav({level, guessLeft}) {
  return (
    <div className='header'>

<div className='nav-logo'>
  <img src={logo} alt="logo" />


</div>


<div className='nav-level'>
{level}
</div>

<div className='nav-info'>
  <div className='nav-guess'>
  Guess Left: {guessLeft}

</div>

<img className='nav-settings' src="https://img.icons8.com/color/35/undefined/settings--v1.png"/>



</div>

    </div>
  )
}
