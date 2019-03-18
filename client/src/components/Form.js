import React from 'react';

const Form = (props) => (
    <form onSubmit={props.recipeSearch}>
        <input type="text" name="recipe" placeholder="Enter Food..."/>
        <button className="btn btn-sm btn-info">Search</button>
    </form>
)

export default Form;