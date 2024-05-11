// import logo from './logo.svg';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import Products from './Products';
import JumbotronComponent from './JumbotronComponent';

function App() {


  return (
    <div className="App">
      <JumbotronComponent>
        This is a long sentence, and i want to insert content into the jumbotron component from the outside
      </JumbotronComponent>
    </div>
  );
}

export default App;
