import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let name = "리액트";

  return (
    <div style={
	    {
		    backgroundColor : 'black',
		    color : 'white',
		    fontSize : '12px',
		    fontWeight : 'bold'
	    }
    }>
      <h1>Hello, 
        {
          name === "리액트" ? (<h3>YES</h3>) : (<h3>NO</h3>)
        }!</h1>
      <p>반갑습니다.</p>
    </div>
  );
}

export default App;