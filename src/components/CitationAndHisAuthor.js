import React from 'react';

function CitationAndHisAuthor(props) {
    return (
     <div style={{ height: "100px" }}>
      <blockquote id="citation">{props.quote}</blockquote>
      <cite id="author">{props.author}</cite>
    </div> 
    );
  }

  export default CitationAndHisAuthor;