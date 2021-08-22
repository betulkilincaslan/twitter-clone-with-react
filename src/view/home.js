import React, { Component } from "react";
import { Header } from "../container";
import { TweetForm } from "../component/tweetForm";
import { TweetList } from "../component/tweetList";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      tweetText: "",
      tweets: [],
    };
    this.onChangeTweetForm = this.onChangeTweetForm.bind(this);
    this.handleTweetSubmit = this.handleTweetSubmit.bind(this);
  }

  componentWillMount() {
    fetch("tweetData.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ tweets: data });
      })
      .catch((err) => console.log(err));
  }

  onChangeTweetForm(event) {
    this.setState({ tweetText: event.target.value });
  }

  handleTweetSubmit() {
    const newTweets = [...this.state.tweets];
    const currentUser = JSON.parse(localStorage.getItem("user"));

    newTweets.unshift({
      id: currentUser.username,
      name: currentUser.name,
      username: currentUser.username,
      profilePicture: currentUser.profilePicture,
      replyCount: 50,
      retweetCount: 200,
      likeCount: 1000,
      tweetContent: this.state.tweetText,
      dateTime: new Date().toISOString(),
    });

    this.setState({ tweets: newTweets, tweetText: "" });
  }

  render() {
    const { tweetText, tweets } = this.state;

    return (
      <div className="latestTweets">
        <Header title="Home" />
        <TweetForm
          tweetText={tweetText}
          onChangeTweetForm={this.onChangeTweetForm}
          handleTweetSubmit={this.handleTweetSubmit}
        />
        <div className="latestTweets__divisor" />
        {tweets.length > 0 ? (
          <TweetList tweets={tweets} />
        ) : (
          <span>Loading...</span>
        )}
      </div>
    );
  }
}

export default Home;
