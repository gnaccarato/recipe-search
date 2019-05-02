import React from 'react';
import {Link} from 'react-router-dom';

const Recipe = (props) => (
    <div>
        <div className="grid">
          {props.recipes.map((recipe) => {
            return (
              <div key={recipe.recipe_id}>
                <img src={recipe.image_url} alt={recipe.title} />
                <h5>{recipe.title.length > 20 ? recipe.title.substring(0, 20) + '...' : recipe.title}</h5>
                <h6>Rating: <span>{Math.floor(recipe.social_rank)}</span></h6>
                <button className="btn btn-warning">
                  <Link to={{
                    pathname: `/recipe/${recipe.recipe_id}`,
                    state: {recipe: recipe.title}
                    }}>View Recipe
                  </Link>
                </button>
              </div>              
            )
          })}  
        </div>        
    </div>    
)

export default Recipe;