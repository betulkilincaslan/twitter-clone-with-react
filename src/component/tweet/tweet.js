import React from "react";
import PropTypes from "prop-types";
import { Icon } from "../icon";
import moment from "moment";

const Tweet = (props) => {
  const {
    name,
    username,
    dateTime,
    tweetContent,
    replyCount,
    retweetCount,
    likeCount,
  } = props;

  const currentUser = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="tweetsContainer">
      <a href="/">
        <div className="latestTweets__profilePic">
          {currentUser.username === username ? (
            <img
              src={currentUser.profilePicture}
              style={{ width: "46px", height: "46px", borderRadius: "23px" }}
              alt="profile"
            />
          ) : (
            <Icon size={46} iconName="user" />
          )}
        </div>

        <div className="tweetsContainer__content">
          <div className="tweetsContainer__name">
            <span className="name">{name}</span>
            <span className="handle">@{username}</span>
            <span className="spacer">·</span>
            <span className="time">
              {moment(dateTime, "YYYY-MM-DD hh:mm:ss").fromNow().toString()}
            </span>
          </div>

          <div className="tweetsContainer__text">{tweetContent}</div>

          <div className="tweetsContainer__options">
            <div className="tweetsContainer__items">
              <button className="comment">
                <Icon size={16} iconName="message-circle" />
                <span>{replyCount}</span>
              </button>
            </div>
            <div className="tweetsContainer__items">
              <button className="retweet">
                <Icon size={16} iconName="repeat" />
                <span>{retweetCount}</span>
              </button>
            </div>
            <div className="tweetsContainer__items">
              <button className="heart">
                <Icon size={16} iconName="heart" />
                <span>{likeCount}</span>
              </button>
            </div>
            <div className="tweetsContainer__items">
              <button className="share">
                <Icon size={16} iconName="share" />
              </button>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

Tweet.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  dateTime: PropTypes.string.isRequired,
  tweetContent: PropTypes.string.isRequired,
  replyCount: PropTypes.number.isRequired,
  retweetCount: PropTypes.number.isRequired,
  likeCount: PropTypes.number.isRequired,
};

export default Tweet;
