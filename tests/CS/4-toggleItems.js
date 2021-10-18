// Front-end Challenge Hard
// We provided some simple React template code. Your goal is to modify the application so that when you click the toggle button, the favorite programming language toggles between the items in the languages array. The default value should be the first item in the array.

// You must use the Context API for this challenge, which means you have to use the React.createContext and Context.Provider functions. You are free to add classes and styles, but make sure you leave the element ID's as they are.

// Submit your code once it is complete and our system will validate your output.

import React, {useState} from "react";
import ReactDOM from "react-dom";

const languages = ["JavaScript", "Python"];

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      // implement Context here so can be used in child components
      <MainSection />
    );
  }
}

class MainSection extends React.Component {
  render() {
    return (
      <div>
        <p id="favoriteLanguage">Favorite programing language: {null}</p>
        <button id="changeFavorite">Toggle language</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
