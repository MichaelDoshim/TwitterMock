import { Avatar } from '@material-ui/core';
import React, { forwardRef } from 'react';
import './Post.css';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import PublishIcon from '@material-ui/icons/Publish';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import RepeatIcon from '@material-ui/icons/Repeat';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

const Post = forwardRef(
    ({displayName, username, verified, text, image, avatar, timestamp}, ref) =>{
    return (
        <div className="post" ref={ref}>
            <div className="post__avatar"> 
                <Avatar src={avatar} />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            {displayName}{" "} 
                            <span className="post__headerSpecial">
                                {/* {verified && } is a if condition, if there is a verified badge then show it*/}
                                {verified && <VerifiedUserIcon className="post__badge"/>} @{username} 
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>{text}</p>
                    </div>
                    <img 
                        src={image}
                        alt="" 
                    />
                    <div className="post__footer">
                        <ChatBubbleOutlineIcon fontSize="small" />
                        <RepeatIcon fontSize="small" />
                        <FavoriteBorderIcon fontSize="small" />
                        <PublishIcon fontSize="small" />
                    </div>
                </div>
            </div>
        </div>
    )
});

export default Post
