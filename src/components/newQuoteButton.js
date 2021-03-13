import React from 'react';

const NewQuoteButton = (props) => {
    return(
      <button className="btn btn-success"
      id="new-quote"
      onClick={() => props.newQuoteFunction()}
      style={{ marginLeft: 10 }}>
        new quote
      </button>
    );
  }

  export default NewQuoteButton;