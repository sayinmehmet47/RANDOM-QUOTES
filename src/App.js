import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [text, setText] = useState([]);
  const [author, setAuthor] = useState([]);

  const getQuote = () => {
    const random = Math.floor(Math.random() * 1643 + 1);
    fetch('https://type.fit/api/quotes')
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setText(result[random].text);
          setAuthor(result[random].author);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };

  useEffect(() => {
    getQuote();
  }, []);


const redirect=()=>{

  window.location.href= 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='+encodeURIComponent('"' + text + '" ' + author)
  ;

}

  return (
    <div
      className="d-flex flex-column  border border-primary w-50 shadow container"
      id="quote-box"
    >
      <h2 id="text" className="m-4">
        {text}
      </h2>
      <h4 id="author" className="text-info text-end m-3">
        {author}
      </h4>
      <button id="new-quote" className="btn btn-primary" onClick={getQuote}>
        New Quote
      </button>

      <a onClick={redirect}
 id="tweet-quote" className="mt-5">
        <i className="fab fa-twitter fa-1x"></i>
      </a>
    </div>
  );
}

export default App;
