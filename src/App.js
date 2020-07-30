import React from 'react';
import logo from './logo.svg';
import './App.css';
import myQuotes from './Quotes';


//Action type
const SET_QUOTE = "SET_QUOTE";


// Initial State
const initialState = {
  quote: myQuotes[Math.floor(Math.random() * myQuotes.length)]
};

//Action creator
function randomQuoteAction() {
  const i = Math.floor(Math.random() * myQuotes.length);
  return {
    type: SET_QUOTE,
    index: i
  };
}

//Reducer

function reducer(state, action) {
  switch (action.type) {
    case SET_QUOTE:
      return {
        quote: myQuotes[action.index]
      };
    default:
      return state;
  }
}


function Quote(props) {

  const [state, dispatch] = React.useReducer(reducer, initialState);

  const twitterUrl = encodeURI("https://twitter.com/intent/tweet?text=" + state.quote.text + " — " + state.quote.author);

  return (
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-md-7 col-sm-7">
          <blockquote class="text-center clearfix" id="quote-box">
            <p id="text">{state.quote.text}</p>
            <footer class="blockquote-footer text-right" id="author">
              {state.quote.author}
            </footer>

            <a
              class="button"
              id="tweet-quote"
              title="Share this quote!"
              target="_blank"
              href={twitterUrl}
            >
              <i class="fab fa-twitter"></i>
            </a>
            <button
              onClick={() => dispatch(randomQuoteAction())}
              class="btn btn-dark"
              id="new-quote"
            >
              New quote
            </button>
          </blockquote>
        </div>
      </div>
    </div>
  );


}


/* class Quote extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.getNextQuote();
  }

  render() {
    return (
      <div class="row justify-content-center">
        <div class="col-md-7 col-sm-7">
          <blockquote class="text-center clearfix" id="quote-box">
            <p id="text">{this.props.text}</p>
            <footer class="blockquote-footer text-right" id="author">
              {this.props.author}
            </footer>

            <a
              class="button"
              id="tweet-quote"
              title="Share this quote!"
              target="_blank"
              href={encodeURI(
                "https://twitter.com/intent/tweet?text=" +
                this.props.text +
                " — " +
                this.props.author
              )}
            >
              <i class="fab fa-twitter"></i>
            </a>
            <button
              onClick={this.handleClick}
              class="btn btn-dark"
              id="new-quote"
            >
              New quote
            </button>
          </blockquote>
        </div>
      </div>
    );
  }
} */




export default Quote;
