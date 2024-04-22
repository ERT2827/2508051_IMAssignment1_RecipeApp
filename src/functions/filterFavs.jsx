import data from "../recipes.json"

//This code if for filtering based on whether an item is a favourite

function filterFavourites() {
    /*In case it isn't obvious, this is heavily reusing my filter
    other filtering code, but since that works well, I feel as though that's fine.*/
    
    const validOptions = []; //This array is the valid options

    const recipeHolders = document.querySelectorAll(".recipeHolder");
    // this is an array of all the recipe holders

    const recip = data.recipes;
    /* This gets the recipes from within the data.
    The need to do this was kind of annoying, but 
    at the same time it does allow me to have multiple
    arrays in one JSON and is the beginning of a proper
    database. */

    recip.forEach(i => {
        if(i.isFavourite){
            validOptions.push(true);
        }else{
            validOptions.push(false);
        }
    });

    for (let index = 0; index < recipeHolders.length; index++) {
        if (!validOptions[index]) {
            recipeHolders[index].style.display = "none";
        }else{
            recipeHolders[index].style.display = "block";
        }
    }
}

/* somewhat annoyingly, this function can't save
favourites between sessions, but that also seems
unnessecarily annoying to do, so I'm not going
to do it. */

export default filterFavourites;