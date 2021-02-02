import React from 'react';
import './FaceRecognition.css';
import '../../styles/css/dashboard/main.css';



const FaceRecognition = ({ imageUrl, box , entries }) => {

    const defaultImage = 'https://criticalhits.com.br/wp-content/uploads/2020/12/Tanjiro.jpg';
  return (
    <div className="image-found">
        <div className="image-text" >
                <span>Face detected</span>
                <img id="inputimage" src={imageUrl|| defaultImage} alt="Detected"/>  
                <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
        </div>
        
        <ul className="image-list">
            <li >
                <span>Entries</span>
                <h2> {entries}</h2>
            </li>
            <li>
                <span>Position</span>
                <h2>2</h2>
            </li>
            <li>
                <span>Delete entry</span>
            </li>
            <li>
                <span>Clear </span>
            </li>
        </ul>

  </div>

  );
}

export default FaceRecognition;