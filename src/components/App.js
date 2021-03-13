import '../App.css';
import React from 'react';
import { Container } from "react-bootstrap";
import CitationAndHisAuthor from './CitationAndHisAuthor';
import NewQuoteButton from './newQuoteButton';
import TwitterButton from './TwitterButton';
import quotes from './quotes';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: ""
    };
    this.newQuote = this.newQuote.bind(this);
  }

  newQuote() {
    let indexOfQuote = this.calculateRandomNumber();
    if (this.state.quote === quotes[indexOfQuote][0]) {
      indexOfQuote = this.calculateRandomNumber();
    }
    this.setState((state) => ({
      quote: quotes.slice()[indexOfQuote][0],
      author: quotes.slice()[indexOfQuote][1]
    }));
  }
  calculateRandomNumber = (
    min = Math.ceil(0),
    max = Math.floor(quotes.length)
  ) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  componentDidMount() {
    this.newQuote();
  }
  render() {
    return (
      <Container
        className="row d-flex justify-content-center"
        style={{ backgroundColor: "#80a4ff", margin: "auto", paddingTop: 50 }}
      >
        <div
          id="quote-box" className="col-md6 my-auto"
          style={{
            margin: "auto",
            width: 400,
            backgroundColor: "white",
            padding: 10
          }}
        >
          <CitationAndHisAuthor quote={this.state.quote} author={this.state.author}/>
          
          <TwitterButton quote={this.state.quote} author={this.state.author} />

          <NewQuoteButton newQuoteFunction={this.newQuote} />
        </div>
      </Container>
    );
  }
}
document.body.style.backgroundColor = "#80a4ff";

export default App;
