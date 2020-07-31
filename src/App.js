import React from 'react';
import logo from './logo.svg';
import './App.css';
import myQuotes from './Quotes';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";


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
      <div class="row d-flex align-items-center justify-content-center">
        <div class="col-md-7 col-sm-12">
          <blockquote class="text-center clearfix" id="quote-box">
            <p id="text">{state.quote.text}</p>
            <footer class="blockquote-footer text-right" id="author">
              {state.quote.author}
            </footer>
            <div class="bottom">
              <a
                class="button"
                id="tweet-quote"
                title="Share this quote!"
                target="_blank"
                href={twitterUrl}
              >

                <div class="icon">
                  <FontAwesomeIcon icon={faTwitter} style={{ color: 'black', fontSize: '30' }} />
                </div>
              </a>
              <button
                onClick={() => dispatch(randomQuoteAction())}
                class="btn btn-dark"
                id="new-quote"
              >
                Next quote
            </button>
            </div>
          </blockquote>
        </div>
      </div>
    </div>
  );


}




export default Quote;
