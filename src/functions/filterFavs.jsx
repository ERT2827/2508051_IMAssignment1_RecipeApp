import data from "../recipes.json"

//This code if for filtering based on whether an item is a favourite

function filterFavourites() {
    /*In case it isn't obvious, this is heavily reusing my filter
    other filtering code, but since that works well, I feel as though that's fine.*/
    
    const validOptions = [];

    const recipeHolders = document.querySelectorAll(".recipeHolder");

    const recip = data.recipes;

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