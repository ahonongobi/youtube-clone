import React from 'react'
import Avatar from "@material-ui/core/Avatar"
import "./VideoCard.css"
function VideosCard({image,title,chanel,views,timestamp,chanelImage}) {
    return (
        <div className="videosCard">
           <img className="videos__thumbail" src={image} alt="" srcset=""/>
           <div className="videosCard__info">
      <Avatar className="videosCard__avatar" src={chanelImage} alt={chanelImage}/>
        <div className="video__text">
            <h4>{title}</h4>
            <p>{chanel}</p>
    <p>{views} . {timestamp}</p>
        </div>
           </div>
        </div>
    )
}

export default VideosCard
