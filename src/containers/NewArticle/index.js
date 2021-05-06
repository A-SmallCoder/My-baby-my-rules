import React from 'react';
import "./style.css";


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
        <h1>New Article</h1><hr/>
        <form>
            <div className="form-group">
                <label for="title">Title</label><br/>
                <input type="text" className="form-control title" name="title"/>
            </div>

            <div className="form-group">
                <label for="intro">Intro</label><br/>
                <textarea className="form-control" id="intro" wrap="soft"/>
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
            </div>

            <div className="form-group">
                <label for="outro">Outro</label><br/>
                <textarea className="form-control" id="outro" wrap="soft"/>
            </div><br/>

            <h3>Photos</h3>
            <hr/>
            <div className="row d-flex-justify-content-around pl-4 pr-4 pt-2 mb-5">
                <div>
                    <label for="cover">Cover photo</label><br/>
                    <input type="file" name="cover"></input>
                </div>
                <div>
                    <label for="photo2">photo 2</label><br/>
                    <input type="file" name="photo2"></input>
                </div>
            </div>

            <h3><label for="ourfavesDiv">Our Faves</label></h3>
            <hr />
            
            <div className="p-4 row d-flex justify-content-between" id="ourfavesDiv">
                <div>
                    <label for="title">Fave 1</label><br/>
                    <input type="text" className="form-control faveName mb-2" placeholder="Fave name"/>
                    <span>Fave Image: </span><input type="file" id="photo"></input>
                    <input type="text" className="form-control linkString mb-2 mt-2" placeholder="Item link"/>
                </div>
                <div>
                    <label for="title">Fave 2</label><br/>
                    <input type="text" className="form-control faveName mb-2" placeholder="Fave name"/>
                    <span>Fave Image: </span><input type="file" id="photo"></input>
                    <input type="text" className="form-control linkString mb-2 mt-2" placeholder="Item link"/>
                </div>
                <div>
                    <label for="title">Fave 3</label><br/>
                    <input type="text" className="form-control faveName mb-2" placeholder="Fave name"/>
                    <span>Fave Image: </span><input type="file" id="photo"></input>
                    <input type="text" className="form-control linkString mb-2 mt-2" placeholder="Item link"/>
                </div>
                <div>
                    <label for="title">Fave 4</label><br/>
                    <input type="text" className="form-control faveName mb-2" placeholder="Fave name"/>
                    <span>Fave Image: </span><input type="file" id="photo"></input>
                    <input type="text" className="form-control linkString mb-2 mt-2" placeholder="Item link"/>
                </div>
                
            </div>

            <div className="row d-flex justify-content-around mt-3">
                <button className='btn btn-primary' type="button">Preview</button>
                <button className='btn btn-success' type="button">Post</button>
            </div>

        </form>
    </div>
   )

 }

export default NewArticle