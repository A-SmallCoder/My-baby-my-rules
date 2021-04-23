import React from 'react';
import "./style.css";
import {$} from 'jquery';

/**
* @author
* @function NewArticle
**/

const NewArticle = (props) => {
    /*
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#pp').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }else{alert("no input image")}
    }
    */

  return(
    <div id="newArticle">
        <h2>New Article</h2><hr/><br/>
        <form>
            <div className="form-group">
                <label for="title">Title</label><br/>
                <input type="text" className="form-control" id="title"/>
            </div>

            <div className="form-group">
                <label for="section1">Section 1</label><br/>
                <textarea className="form-control" id="section1" wrap="soft"/>
            </div>

            <div className="form-group">
                <label for="section2">Section 2</label><br/>
                <textarea className="form-control" id="section2" wrap="soft"/>
            </div>

            <div className="form-group">
                <label for="section3">Section 3</label><br/>
                <textarea className="form-control" id="section3" wrap="soft"/>
            </div><br/>

            <h3><label for="ourfavesDiv">Our Faves</label></h3>
            
            <div className="row d-flex justify-content-around" id="ourfavesDiv">
                <div>
                    <label for="title">Fave 1</label><br/>
                    <input type="text" className="form-control faveName mb-2"/>
                    <input type="file" id="photo"></input>
                </div>
                <div>
                    <img id="pp" src="/images/imageIcon.png" alt="uploaded image" />
                </div>
            </div>

            

        </form>
    </div>
   )

 }

export default NewArticle