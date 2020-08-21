import React from 'react';
import "./TweetBox.css";
import { Avatar, Button } from '@material-ui/core';

function TweetBox() {
  return <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/theme/s/284832/settings_images/rLlCifgXRJiT0RoNjK_Logo_roundbackbround_black.png" />
          <input placeholder="What's happening?" type="Text" />
        </div>
        <input className = "tweetBox__imageInput"
         placeholder="Optional: Enter image URL"
         type="text" />
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>;
}

export default TweetBox
