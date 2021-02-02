import React from 'react';
import './ImageLinkForm.css';
import '../../styles/css/dashboard/main.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
 

  return (
    <div className="search">
        {/**  Receive the values of input */}
       
        <input type="text" 
            onChange={onInputChange}
            className="dashInput" 
            id="dashInput"
            placeholder="Type the url of the image"
           
        />
        <div className="buttons">
        <button 
        className="dashButton" onClick={onButtonSubmit}
        > Find face</button>
        
        <button className="dashButton"> Clear search</button>
    </div>
    
</div>
  );
}

export default ImageLinkForm;