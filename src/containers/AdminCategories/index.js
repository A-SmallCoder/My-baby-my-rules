import React from 'react'
import './style.css'
import Modal from 'react-modal'
import {$} from 'jquery';
import Fave from '../../components/UI/Fave'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

/**
* @author
* @function AdminCategories
**/

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      width            : '450px'
    }
  };

Modal.setAppElement('body')

const AdminCategories = (props) => {

    var subtitle;
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal(){
        setIsOpen(false);
    }

    function deleteCategory (category){
        confirmAlert({
          title: 'Confirm deletion',
          message: 'Are you sure you want to delete this category? This cannot be undone.',
          buttons: [
            {
              label: 'Yes',
              onClick: () => alert(category + ' Yes')
            },
            {
              label: 'No',
              onClick: () => alert(category + 'No')
            }
          ]
        });
    };

  return(
    <div id="AdminCategories" className="pl-4 ">
        <div className="row">
            <h1 className="mr-auto">Categories</h1>
            <button type="button" className="btn btn-primary mr-4" onClick={openModal} >Add Category</button>
        </div>
        <br/>

        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="New category modal"
        >

          <h2 ref={_subtitle => (subtitle = _subtitle)}>New category</h2><hr/>
          
          <form>
            <div className="form-group">
                <label for='name'>Category name</label>
                <input type="text" name="name" className="form-control" placeholder="Tips and tricks"/>
            </div>

            <div className="form-group">
                <label for='desc'>Description</label>
                <textarea className="form-control" name='desc' wrap="soft"/>
            </div>
        
            <button onClick={closeModal} className="btn btn-secondary mr-4">Cancel</button>
            <button className="btn btn-primary float-right">Save</button>
          </form>
        </Modal>
        
        <form>
          <div className="search row gy-2 " >
            <input type="text" className="form-control col-md-10 col-sm-10 mr-4" placeholder="Search categories"/>
            <button type="submit" className="sub"><FontAwesomeIcon icon={faSearch}/> </button>
           </div>
        </form>
        <br/>
        <br/>

        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Items in category</th>
                    <th scope="col">Description</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td scope="row">Tips and tricks</td>
                    <td>3</td>
                    <td id="catDesc">In publishing and graphic designf a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy</td>
                    <td>
                        <button type="submit" className="btn btn-danger" onClick={() => deleteCategory("category")}>Delete this category</button>
                    </td>
                </tr>
            </tbody>
        </table>
        
    </div>
  )

 }

export default AdminCategories