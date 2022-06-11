import React from "react";
import style from './recipe.module.css';

const Recipe = ({recipeData}) =>{
	return(
		<div className={style.recipe}>
			<h1>{recipeData.strMeal}</h1>
			{/* <ol>
				{ingredients.map(ingredient=>(
					<li>{ingredient.text}</li>
				))}
			</ol> */}
			
<p>Country : {recipeData.strArea}</p>
<p>Category : {recipeData.strCategory}</p>

			<img className={style.image} src={recipeData.strMealThumb} alt=""/>

		</div>
	);

}
export default Recipe;
