import React from 'react'
import './style.css'
import {$} from 'jquery';
import Fave from '../../components/UI/Fave'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';

/**
* @author
* @function OurFaves
**/

let OurFaves = (props) => {

    function deleteFave (fave){
        confirmAlert({
          title: 'Confirm deletion',
          message: 'Are you sure to delete this fave?',
          buttons: [
            {
              label: 'Yes',
              onClick: () => alert( fave + ' Yes')
            },
            {
              label: 'No',
              onClick: () => alert(fave + 'No')
            }
          ]
        });
    };

  return(
    <div id="OurFaves" className="pl-4 ">
        <h1>Our Faves</h1>
        
        <form>
          <div className="search row gy-2 " >
            <input type="text" className="form-control col-md-10 col-sm-10 mr-4" placeholder="search articles and categories"/>
            <button type="submit" className="sub"><FontAwesomeIcon icon={faSearch}/> </button>
           </div>
        </form>
        <hr/>

        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">link</th>
                    <th scope="col">category</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td scope="row">mat</td>
                    <td>https://google.jm</td>
                    <td>Tips and tricks</td>
                    <td>
                        <button type="submit" className="delBtn" onClick={() => deleteFave("fave")}>Delete this favorite item</button>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
   )

 }

export default OurFaves