import React from 'react';
import {Link} from 'react-router-dom';

class Recipe extends React.Component {
    state = {
        currentRecipe: []
    }

    componentDidMount = async () => {        
        const api_key = '979fd7f52ad690d13df769d5206d6e05';
        const title = this.props.location.state.recipe;
        const api_req = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${api_key}&q=${title}`);        
        const api_res = await api_req.json();    
        this.setState({
            currentRecipe: api_res.recipes[0]
        })          
    }

    render() {
        return (
            <div className="recipe_page">
                <h1 className="header_title">SEARCH RECIPES</h1>
                <img src={this.state.currentRecipe.image_url} alt={this.state.currentRecipe.recipe_id} />                
                <h4>{this.state.currentRecipe.title}</h4>
                <h5>Published by: <span>{this.state.currentRecipe.publisher}</span></h5>
                <h5>Link: <a href={this.state.currentRecipe.publisher_url}>{this.state.currentRecipe.publisher_url}</a></h5>
                <h6>Rating: <span>{Math.floor(this.state.currentRecipe.social_rank)}</span></h6>                
                <button className="btn btn-warning">
                   <Link to="/">Back</Link>
                </button>
            </div>
        )
    }
}

export default Recipe;