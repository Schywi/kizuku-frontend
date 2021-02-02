import React from 'react';
 
import '../../styles/css/homepage/main.css';
import '../../styles/css/homepage/footer.css';
import face from  '../../img/face.png';

const Home = () => {
   
      return (
       <>
             <div class="container">
                    
                <aside class="sidebar">
                    <div class="sidebar-widget">
                    <h2 class="sidebar-widget__title">Face Recognition</h2>
                    
                    <div class="sidebar-widget__container">
                        <p class="sidebar-widget__description">
                            With Artificial Integillence and Machine Learning we develop a way to recognize faces .
                        </p>
                        <button  class="sidebar-widget__button"  href="signIn">Get Started </button>
                    </div>
                    
                    </div>
                
                </aside>
                
                <main role="main" class="main">
                    <article class="featured-article">
                    
                    <img
                        src={face}
                        class="featured-article__img"
                        alt="simplistic wall and table"
                    />
                    
                    </article>

                </main>
                
            </div>
                <footer class="footer">
                
                         <p class="footer__description">All Rights Reserved For Lucas Miranda 2021</p>
                </footer>
       </>
 
      );
}

export default Home;