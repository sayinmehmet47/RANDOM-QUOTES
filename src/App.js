import './App.css';
import Theme from "./Theme"
import React, { useState, useEffect,createContext,useRef } from 'react';
export const GeneralContext=createContext("bbb")

function App() {


  const [bgColor,setBgColor]=useState("blue")
  const [isLoaded, setIsLoaded] = useState(false);
  const [text, setText] = useState([]);
  const [author, setAuthor] = useState([]);

  function random_bg_color() {
    var x = Math.floor(Math.random() * 120);
    var y = Math.floor(Math.random() * 120);
    var z = Math.floor(Math.random() * 120);
    const rgb = 'rgb(' + x + ',' + y + ',' + z + ')';
    return rgb;
  }

  
  const handleClick = ()=>{
    setBgColor(random_bg_color());
  }



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
      style={{

        color:bgColor,
        transition: "all 2s ease",
        WebkitTransition: "all 2s ease",
        MozTransition: "all 1s ease"


      }}
      className="d-flex flex-column  border border-primary w-50 shadow container"
      id="quote-box"
    >
      <h2 id="text" className="m-4">
        {text}
      </h2>
      <h4 id="author" className="text-info text-end m-3">
        {author}
      </h4>
      <button id="new-quote" className="btn btn-primary" onClick={() => {
          getQuote();
          handleClick()


        }}>
        New Quote
      </button>

      <a onClick={redirect}
 id="tweet-quote" className="mt-5">
        <i className="fab fa-twitter fa-1x"></i>
      </a>
  <GeneralContext.Provider   value={{ value: [text, setText], value2: [author, setAuthor],value3:[bgColor,setBgColor] }}>
    <Theme />
    </GeneralContext.Provider>     
    </div>
  );
}

export default App;
