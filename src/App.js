import './App.css';
import { useState } from 'react';
import Axios from "axios"
import RecipeTile from './recipetile/RecipeTile';

export default function App() {
  const YOUR_APP_ID = "f9139b55"
  const YOUR_APP_KEY = "3289e29017963c9593ab098b3776bdf8"
  const [query, setQuery] = useState("");
  const [healthLabel, setHealthLabel] = useState("vegetarian")
  const[recipies, setRecipes] = useState([]);

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}`
  

  const getRecipeInfo = async () => {
    var result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data.hits);

  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipeInfo();
  }


  return (
    <div className="app">
      <h1 onClick={getRecipeInfo}><u>Food Recipe Hub</u></h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input type="text"
        placeholder="Type an ingredient"
        autoComplete="off" 
        className="app__input"
        value={query}
        onChange={(e) => {setQuery(e.target.value)}} />
        <select className="app__healthLabels">
          <option onClick={() => {setHealthLabel("vegan")}} value="vegan">Vegan</option>
          <option onClick={() => {setHealthLabel("vegeterian")}} value="vegeterian">Vegeterian</option>
          <option onClick={() => {setHealthLabel("low-sugar")}} value="low-sugar">Low sugar</option>
          <option onClick={() => {setHealthLabel("pork-free")}} value="pork-free">Pork free</option>
          <option onClick={() => {setHealthLabel("wheat-free")}} value="wheat-free">Wheat free</option>
        </select>
        <input type="submit" value="Get Recipe" className="app__submit" />
      </form>
      <div className="app__recipes">
        {recipies.map((recipe) =>{
          return <RecipeTile recipe={recipe}/>
        })}
      </div>
    </div>
  );
}


