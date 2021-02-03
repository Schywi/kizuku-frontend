import React from 'react';
 
import '../../styles/css/dashboard/main.css';
import FaceRecognition from '../FaceRecognition/FaceRecognition';
import ImageLinkForm from '../ImageLinkForm/ImageLinkForm';


const dashMain = ({ onInputChange, onButtonSubmit, imageUrl, box , entries }) => {
   
      return (
        <main role="main" className="dashMain">
            <article className="featured-article  dashArticle">
                    <h1 className="dashH1"> Profile</h1>
                    <h2 className="dashH2">This Magic Brain will detect faces in your pictures. Git it a try.</h2>
                    <ImageLinkForm  onInputChange={onInputChange} onButtonSubmit={onButtonSubmit}  />

                    <FaceRecognition  imageUrl={imageUrl} box={box} entries={entries} />
            </article>
      </main>
 
      );
}

export default dashMain;