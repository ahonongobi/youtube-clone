import React from 'react'
import "./SearchPage.css"
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChanelRow from "./ChanelRow"
import VideoRow from "./VideoRow"
function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                 <TuneOutlinedIcon />
                 <h2>FILTER</h2>
                
            </div>
            <hr />
            <ChanelRow 
              image="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"
              chanel="Clever developer"
              verified
              subs="659k"
              noOfvideos={382}
              description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the ..."
            />
            <hr />
            
            <VideoRow 
            views="1.4M"
            subs="660k"
            description="Do you want a FREE one hour training... check this out" 
            timestamp="59 seconds ago"
            chanel="clever gobi"
            title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
            image ="https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBuov-I_MvZg_RR-beB3Q9gNGM0pQ" 
            />
            <VideoRow 
            views="1.4M"
            subs="660k"
            description="Do you want a FREE one hour training... check this out" 
            timestamp="59 seconds ago"
            chanel="clever gobi"
            title="Python Tutorial for Beginners - Full Course in 11 Hours [2020]"
            image ="https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBuov-I_MvZg_RR-beB3Q9gNGM0pQ" 
            />
            <VideoRow 
            views="1.4M"
            subs="660k"
            description="Do you want a FREE one hour training... check this out" 
            timestamp="59 seconds ago"
            chanel="clever gobi"
            title="🔴 Flutter Tutorial for Beginners - Full Course in 8 Hours [2020]"
            image ="https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBuov-I_MvZg_RR-beB3Q9gNGM0pQ" 
            />
            <VideoRow 
            views="1.4M"
            subs="660k"
            description="Do you want a FREE one hour training... check this out" 
            timestamp="59 seconds ago"
            chanel="clever gobi"
            title="🔴 Flutter Tutorial for Beginners - Full Course in 8 Hours [2020]"
            image ="https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBuov-I_MvZg_RR-beB3Q9gNGM0pQ" 
            />
            <VideoRow 
            views="1.4M"
            subs="660k"
            description="Do you want a FREE one hour training... check this out" 
            timestamp="59 seconds ago"
            chanel="clever gobi"
            title="🔴 Flutter Tutorial for Beginners - Full Course in 8 Hours [2020]"
            image ="https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBuov-I_MvZg_RR-beB3Q9gNGM0pQ" 
            />
            <VideoRow 
            views="1.4M"
            subs="660k"
            description="Do you want a FREE one hour training... check this out" 
            timestamp="59 seconds ago"
            chanel="clever gobi"
            title="🔴 Flutter Tutorial for Beginners - Full Course in 8 Hours [2020]"
            image ="https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBuov-I_MvZg_RR-beB3Q9gNGM0pQ" 
            />
        </div>
    )
}

export default SearchPage
