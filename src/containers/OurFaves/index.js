import React from 'react'
import './style.css'
import {$} from 'jquery';
import Fave from '../../components/UI/Fave'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

/**
* @author
* @function OurFaves
**/

let OurFaves = (props) => {

    function deleteFave (fave){
        confirmAlert({
          title: 'Confirm deletion',
          message: 'Are you sure you want to delete this fave?',
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
        <br/>
        <br/>

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
                    <td scope="row">Mat</td>
                    <td className="linkRow"><a target='_blank' href='https://www.amazon.com/MAGIFIRE-Infant-Inflatable-Months-Newborn/dp/B07S8GBCMV/ref=sr_1_1_sspa?dchild=1&keywords=tummy+time+mat&qid=1619708769&sr=8-1-spons&psc=1&smid=A215ARAHSB5KOY&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEySlo3N040TldRUkJEJmVuY3J5cHRlZElkPUEwMTU2MDcwMzRCWlpPTjRPN05NMyZlbmNyeXB0ZWRBZElkPUEwNzQ0NTk4MzA5SDdSM0hVVk1QNSZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU='>View item</a></td>
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