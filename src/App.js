import './App.css';
import "./functions/recipeDisplay"
import RecipeDisplay from './functions/recipeDisplay';
import data from "./recipes.json";
import DisplayAll from './functions/displayall';
import filterRecipes from "./functions/displayFiltered";
import { useState } from 'react';
import Search from './functions/search';
import filterFavourites from './functions/filterFavs';

// I used this code as the basis for my filter https://gigi.nullneuron.net/gigilabs/filter-list-as-you-type-with-react/

function App() {
  const [filter, setFilter] = useState('');
  //This string is used as the filter parameter


  console.log(data);
  return (
    <>
      <h1>Recipes:</h1>

      <input className='filterInput' type='text' value={filter} onChange={event => {setFilter(event.target.value); Search(filter);}}/>
      {/* This text box is used to search for specific items. */}

      {/* These buttons are used to select the various filter modes*/}
      <section className='buttons'>
        <button onClick={() => DisplayAll()}>Display All</button>
        <button onClick={() => filterRecipes("Meaty")}>Meaty</button>
        <button onClick={() => filterRecipes("Vegan")}>Vegan</button>
        <button onClick={() => filterRecipes("Kosher")}>Kosher</button>
        <button onClick={() => filterFavourites()}>Favorites</button>
      </section>

      {/* This calls the function to display the 
      JSON data */}
      <RecipeDisplay data = {data}/>
    </>
  );
}

export default App;
