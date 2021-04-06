import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widget__searchIcon" />
        <input placeholder="Twitter" type="text" />
      </div>
      <div className="widgets__widgetsContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1323914087340781569"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Tommedian"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://www.instagram.com/jackdesigns_/"}
          options={{ text: "This is Awesome!!" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
