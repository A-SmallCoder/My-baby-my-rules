import React from 'react'
import './style.css';

/**
* @author
* @function Slider
**/

const Slider = (props) => {
  return(

    <div id="">

        <div className="d-flex justify-content-center">
            <p id="banner">
                <span id="text">Your #1 source for all things baby</span> <br/>
                <span id="subtext">blog posts for expecting parents and parents alike on what to expect, cures and remidies, learning experiences and much more</span>
            </p>
        </div>

        <div className="row d-flex justify-content-center">
            <div className="col-md-8">
                <div id="carouselExampleIndicators" className="row carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="/babyClothes.jpg" alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="whisper.jpg" alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="parent.jpg" alt="Third slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    </div>

    
    
   )

 }

export default Slider;