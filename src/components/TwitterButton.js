import React from 'react';

function TwitterButton(props) {
    return (
      <a
        id="tweet-quote"
        target="_blank"
        rel="noopener noreferrer"
        className="twitter-share-button myAuto btn btn-outline-primary"
        href={
          `https://twitter.com/intent/tweet?text=` +
          props.quote +
          " " +
          props.author
        }
        data-size="large"
      >
        <i className="fa fa-twitter fa-fw" />
        tweet
      </a>
    );
  }
  export default TwitterButton;