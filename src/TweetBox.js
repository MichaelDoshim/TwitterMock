import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import "./TweetBox.css"
import { Avatar  } from "@material-ui/core";
import db from './firebase';

function TweetBox() {

    const[tweetMessage, setTweetMessage] = useState("");
    const[tweetImage, setTweetImage] = useState("");

    const sendTweet = e=> {
        // Stops the refresh, you dont want to refresh pages with react
        e.preventDefault();
        db.collection('posts').add({
            displayName: 'Kermit',
            username: 'KermitTheFrog',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://hg1.funnyjunk.com/thumbnails/comments/Random+fish+random+avatar+fan+plankton++_5d3a8b8c1335f2df3ae35abd6f4f8afc.png",
        });

        setTweetImage("");
        setTweetMessage("");
    };

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://hg1.funnyjunk.com/thumbnails/comments/Random+fish+random+avatar+fan+plankton++_5d3a8b8c1335f2df3ae35abd6f4f8afc.png" />
                    <input 
                        onChange={e => setTweetMessage(e.target.value)}
                        value={tweetMessage} 
                        placeholder="What's Happening" 
                        type="text" />
                </div>
                <input 
                    value={tweetImage}
                    onChange={e => setTweetImage(e.target.value)}
                    className="tweetBox__imageInput"
                    placeholder="Enter image URL"
                    type="text"
                />
                <Button onClick={sendTweet} type="submit" className="tweetBox_tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
