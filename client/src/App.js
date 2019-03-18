import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Recipes from './components/Recipes';

class App extends Component {
  // Initial state empty, nothing displayed
  state = {
    recipes: []    
}
  
  // Search click runs recipe search function
  //Async/Await Fetch
  recipeSearch = async (e) => {
    e.preventDefault();
    const api_key = '979fd7f52ad690d13df769d5206d6e05';
    const recipe = e.target.elements.recipe.value;
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${api_key}&q=${recipe}&count=20`);    
    const data = await api_call.json();
    // console.log(data);

    this.setState({
      recipes: data.recipes
    });               
  }

  // Keeps search results in local storage
  componentDidMount = () => {
    const json = localStorage.getItem('recipes');
    const recipes = JSON.parse(json);
    this.setState({recipes});
  }

  componentDidUpdate = () => {
    // Convert to string for local storage
    const recipes = JSON.stringify(this.state.recipes);
    // Local storage keeps search results
    localStorage.setItem('recipes', recipes);
  }

  render() {
    return (
      <div>
        <h1 className="header_title">SEARCH RECIPES</h1>        
        <Form recipeSearch={this.recipeSearch}/>        
        <Recipes recipes={this.state.recipes}/>        
      </div>
    );
  }
}

export default App; 
