import React from 'react';
 
 
import '../../styles/css/navigation/dashHeader.css';
import logo from '../../img/logo.png';


const dashHeader = ({onRouteChange}) => {
   
      return (
        <header className="dashHeader">
        <div className="header-wrapper-column">
          <div className="logo">
              <img  className="logo__img" src={logo} alt="logo"/>  
          
          </div>
          <nav className="nav">
            <ul className="nav__list">
            <li className="nav__item nav__item--active"><p >Profile</p></li>
            <li className="nav__item"><p >Rank</p></li>
            <li className="nav__item"><p >Account</p></li>
          
            <li className="nav__item"> 
                    <p onClick={() => onRouteChange('signout')} >
                         Sign Out</p>
              </li>
            </ul>
          </nav>
        </div>
   </header>
 
      );
}

export default dashHeader;