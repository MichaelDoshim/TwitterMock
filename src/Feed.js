import React, { useState, useEffect } from 'react'
import "./Feed.css"
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from './firebase';
import FlipMove from 'react-flip-move';

function Feed() {
    const [posts, setPosts] = useState([]);

    {/* Run any code inside of this function and dont runn it again after, running it when the component loads or if anything changes*/}
    useEffect(() => {
        //db.collection('posts') gives you access to the firebase 'posts' database
        db.collection("posts").onSnapshot((snapshot) => (
            // This line allows you to loop thorugh each element or each doc in the firbase database
            // you can do doc.avatar to access only an avatar or doc.image to only access the image
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, []);

    return (
        <div className="feed">
            {/* Header */}
            <div className="feed__header">
                <h2>Home</h2>
            </div>
            {/* TweetBox*/}
            <TweetBox/>
            <FlipMove>
                {posts.map( post => (
                    <Post
                    // setting the key as the text, usually you would use the firebase id that they generate
                    key={post.text}
                    username={post.username}
                    displayName={post.displayName}
                    avatar={post.avatar}
                    verified={post.verified}
                    text={post.text}
                    image={post.image}
                    />
                ))}
            </FlipMove>
            {/* Posts */}
        </div>
    )
}

export default Feed
