import React from 'react';
 
import '../../styles/css/navigation/header.css';

import homeLogo from '../../img/kizuku.png';


const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
      return (
  <>
     
</>


      );
    } else {
      return (


      <header class="homeHeader">
          <div class="header-container">
            <div class="logo">
                <img  class="logo__img" src={homeLogo} alt=""/>  
            
            </div>
            <nav class="nav">
              <ul class="nav__list">
                <li class="nav__item nav__item--active"> 
               
                <p onClick={() => onRouteChange('signin')} >Sign In</p>
      
                </li>
                <li class="nav__item">
                <p onClick={() => onRouteChange('register')} >Register</p>
                </li>
                
              </ul>
            </nav>
          </div>
     </header>
      );
    }
}

export default Navigation;