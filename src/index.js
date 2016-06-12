import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDHtTLKyJkFxrQp20ChR3f_Mv5Qkdqdvq0';

// Create a new component. This component should produce some HTML

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Render the HTML and send it to the DOM

// instance of the class, dom element
ReactDOM.render(<App />, document.querySelector('.container'));
