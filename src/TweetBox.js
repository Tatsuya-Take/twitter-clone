import React, { useState } from 'react';
import "./TweetBox.css";
import { Avatar, Button } from '@material-ui/core';
import db from './firebase';

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = e => {
    e.preventDefault()

    db.collection('posts').add({
      displayName: 'Rafeh Qazi',
      username: 'cleverQazi',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://kajabi-storefronts-production.global.ssl.fastly.net/theme/s/284832/settings_images/rLlCifgXRJiT0RoNjK_Logo_roundbackbround_black.png",
    });
    
    setTweetMessage("");
    setTweetImage("");
  };

  return　(
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/theme/s/284832/settings_images/rLlCifgXRJiT0RoNjK_Logo_roundbackbround_black.png" />
          <input
          onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="Text" />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className = "tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text" />
        <Button onClick={sendTweet} className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox
