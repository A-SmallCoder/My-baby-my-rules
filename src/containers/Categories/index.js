import React from 'react'
import Hero from '../../components/Hero'
import Left from '../../components/Left'
import './style.css'

/**
* @author Andrew-Lloyd Small
* @function Categories
**/

const Categories = (props) => {
  return(
    <div>
        <div id="categoriesTop">
            <h2 className="pageTitle">Categories</h2>
        </div>

        <Hero>
            <Left>           
            <div className="" id="cat">
                <div className="row" id="catrow">
                    <div>
                        <a href="#"><p>Tips and tricks</p></a>
                        <p className="weak">description of the category that is a couple words long</p>
                    </div>
                    <div>
                        <a href="#"><p>So relatable</p></a>
                        <p className="weak">description of the category that is a couple words long</p>
                    </div>

                    <div>
                        <a href="#"> <p>Cures and remedies</p></a>
                        <p className="weak">description of the category that is a couple words long</p>
                    </div>

                    <div>
                        <a href="#"><p>Bumps and rashes</p></a>
                        <p className="weak">description of the category that is a couple words long</p>
                    </div>
                </div>  
            </div>
            </Left>
        </Hero>
    </div>
    
   )

 }

export default Categories