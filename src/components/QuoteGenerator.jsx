import React, { useState, useEffect } from 'react';

function QuoteGenerator() {

  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');


  const randomQuote = () => {
    fetch('https://dummyjson.com/quotes')
      .then((res) => res.json())
      .then((data) => {

        if (data && data.quotes && data.quotes.length > 0) {
          const randomIndex = Math.floor(Math.random() * data.quotes.length);
          setQuote(data.quotes[randomIndex].quote);
          setAuthor(data.quotes[randomIndex].author);
        }
      })
      .catch((error) => console.log('Error fetching the quote:', error));
  };


  useEffect(() => {
    randomQuote();
  }, []);

  return (
    <>
      <div className="container">
        <header>Quotes Generator</header>
        <div className="content">
          <div className="quote-content">
            <i className="fa-solid fa-quote-left"></i>
            <p className="quote">{quote}</p>
            <i className="fa-solid fa-quote-right"></i>
          </div>
          <div className="author">
            <span>_</span>
            <span className="author-name text-danger">{author}</span>
          </div>
        </div>
        <div className="buttons">
          <div className="features">
            <button className='button' onClick={randomQuote}>Refresh</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuoteGenerator;