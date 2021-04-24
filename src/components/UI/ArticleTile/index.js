import React from 'react'
import { Link } from 'react-router-dom'
import Article from '../../../containers/Article'
import './style.css'
import { TileData } from './TileData'

/**
* @author
* @function ArticleTile
**/

const ArticleTile = (props) => {
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
                        <Link className="viewButton" to="../Article"><span>View</span></Link>
                    </div>

                </div>
            )
        })}        
    </div>
   )

 }

export default ArticleTile