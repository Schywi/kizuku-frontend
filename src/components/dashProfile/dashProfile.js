import React from 'react';
 
import '../../styles/css/dashboard/profile.css';
import photo from '../../img/user.jpg';
import deleteIcon from  '../../img/deleteUser.svg';

const dashProfile = ({name,entries , imageUrl}) => {
   
      return (
        <aside class="profile dashAside">
          <div class="profile-widget">
            <img className="imagem" src={imageUrl||photo} alt="Profile"/>
            <div class="profile-widget__container">
              <h2 class="profile-widget__title">{name}</h2>
          
              <ul class="profile-widget__profile">
                <li >
                 
                  <h3>Your entries count</h3>
                  <span> {entries}</span>
                </li>
                <li>
                  <h3>Your rank position</h3>
                  <span>2 </span>
                
                </li>
                <li>
                  <h3> <img class="icon" src={deleteIcon} alt="icon"/> Delete account</h3>
                 </li>
              </ul>
            </div>
          </div>
      </aside>
     
      );
}

export default dashProfile;