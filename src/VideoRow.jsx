import React from 'react'
import "./VideoRow.css"
function VideoRow({views,subs,description,timestamp,chanel,title,image}) {
    return (
        <div className="videosRow">
            <img src={image} alt="celver" srcset=""/>
            <div className="videoRow__text">
            <h3>{title}</h3>
            <p className="videos__headline">
    {chanel} . <span className="videosRow__subs"><span className="videosRow__subscribers">{subs}</span>subscribers</span> {" "}  {views}  views .{timestamp} 
    </p>
    <div className="videosRow__description">
            <p className="videoRow__description">{description}</p>
            </div>
            </div>
            
        </div>
    )
}

export default VideoRow
