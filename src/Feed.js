import React, { useState, useEffect } from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "./firebase";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setposts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setposts(
          snapshot.docs.map((doc) => ({
            data: doc.data(),
            id: doc.id,
          }))
        )
      );
  }, []);
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.id}
            displayName={post.data.displayName}
            username={post.data.username}
            verified={post.data.varified}
            text={post.data.text}
            image={post.data.image}
            avatar={post.data.avatar}
            timestamp={post.data.timestamp}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
