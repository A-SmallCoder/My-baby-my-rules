import React from 'react'
import { Link } from 'react-router-dom'
import Article from '../../../containers/Article'
import './style.css'
import { TileData } from './TileData'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

/**
* @author
* @function ArticleTile
**/

const ArticleTile = (props) => {

    function deleteArticle (item){
        confirmAlert({
          title: 'Confirm deletion',
          message: 'Are you sure you want to delete this Article?',
          buttons: [
            {
              label: 'Yes',
              onClick: () => alert(item + ' Yes')
            },
            {
              label: 'No',
              onClick: () => alert(item + 'No')
            }
          ]
        });
    };

  return(
    <div className="articleTile">
        {TileData.map((data,key) => {
            return(
                <div key={key}>
                    <div className="d-flex justify-content-between">
                        <p><strong>Published: {data.published}</strong></p>
                        <p><strong>Comments: {data.commentsCount}</strong></p>
                    </div>

                    <div>
                        <h2>{data.title}</h2>
                        <div className="row p-2 d-flex justify-content-between">
                            <button  onClick={()=> deleteArticle('item to delete')} className='btn btn-danger'>Delete</button>
                            <Link className="btn btn-primary" to="/Admin_/ArticlePreview"><span>View</span></Link>
                        </div>
                    </div>

                </div>
            )
        })}        
    </div>
   )

 }

export default ArticleTile