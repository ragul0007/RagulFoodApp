import React, { useEffect, useState } from 'react'
import './App.css';
import Recipe from './Recipe';

const App = () => {
const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState("");
const [query, setQuery] = useState("");
useEffect(() => {
	getRecipes();
}, [])
const getRecipes = async (className) => {

  let apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;

  if(className === 'random-food'){
    apiUrl = `https://www.themealdb.com/api/json/v1/1/random.php`;
  }

	const response = await fetch
		(apiUrl);
	const data = await response.json();
	setRecipes(data.meals);
	// console.log(data);

};
const updateSearch = e => {
	setSearch(e.target.value);
};
const getSearch = e => {
	e.preventDefault();
  console.log(e.target)
	setQuery(search);
	setSearch("");
  getRecipes(e.target.className);
}

return (
	<div className="App">
	<form className="search-form" onSubmit={getSearch} >
		<input className="search-bar" type="text" value={search}
			onChange={updateSearch} />
		<button className="search-button" type="submit"  onClick={getSearch}>
			Search
		</button>
    <button className="random-food" type="submit"  onClick={getSearch}>
			Get Best Food
		</button>
	</form>
	<div className="recipes">
		{recipes.map(recipe => (
		<Recipe
			key={recipe.idMeal}
			recipeData={recipe}
			// calories={recipe.recipe.calories}
			// image={recipe.recipe.image}
			// ingredients={recipe.recipe.ingredients}
		/>

		))}
	</div>

	</div>
);
}

export default App;
