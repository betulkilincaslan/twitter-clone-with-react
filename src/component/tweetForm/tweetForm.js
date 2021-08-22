import React from "react";
import { Icon } from "../icon";

const TweetForm = (props) => {
  const { tweetText, onChangeTweetForm, handleTweetSubmit } = props;

  const currentUser = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="tweetField">
      <div className="tweetField__profilePic">
        <img
          style={{ width: "46px", height: "46px", borderRadius: "23px" }}
          src={currentUser.profilePicture}
          alt="profile"
        />
      </div>
      <div className="tweetField__inputContainer">
        <input
          className="tweetField__input"
          onChange={onChangeTweetForm}
          placeholder="What's Happening"
          value={tweetText}
        />
        <div className="tweetField__options">
          <div className="tweetField__tools">
            <button className="tweetField__items">
              <Icon size={20} iconName="image" />
            </button>
            <button className="tweetField__items">
              <Icon size={20} iconName="bar-chart-2" />
            </button>
          </div>
          <div className="tweetField__submit">
            <button
              onClick={handleTweetSubmit}
              className="tweetField__submitButton"
            >
              Tweet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetForm;
