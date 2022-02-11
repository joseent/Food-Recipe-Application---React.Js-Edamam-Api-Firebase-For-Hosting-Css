import React from 'react';
import "../recipetile/style.css"

export default function RecipeTile({recipe}) {


    return (
        recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) !=null && (
            <div className="recipeTile">
                <img
                className="recipeTile__image" 
                src={recipe["recipe"]["image"]}
                alt={recipe["recipe"]["label"]}
                onClick={()=> window.open(recipe["recipe"]["url"])} />
                <p className="recipeTile__name">{recipe["recipe"]["label"]}</p>
            </div>
        )
    );
}

