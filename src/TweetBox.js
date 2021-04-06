import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";
import firebase from "firebase";

function TweetBox() {
  const [tweetMessage, SetTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Jack Dixon",
      username: "jackDesigns",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://lh3.googleusercontent.com/ogw/ADGmqu9MrNwApDJENxQ15hcbS-jjjfq49FvYpIm1G_Jgkg=s83-c-mo",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    SetTweetMessage("");
    setTweetImage("");
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__Input">
          <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu9MrNwApDJENxQ15hcbS-jjjfq49FvYpIm1G_Jgkg=s83-c-mo" />
          <input
            onChange={(e) => SetTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="Whats happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button
          disabled={!tweetMessage}
          type="submit"
          onClick={sendTweet}
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
