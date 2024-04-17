import data from "../recipes.json"

//This code if for filtering based on the tags

function filterRecipes(mode) {
    const validOptions = [];

    const recipeHolders = document.querySelectorAll(".recipeHolder");

    const recip = data.recipes;

    /*It detects if a recipe has the tag in the JSON.
    If it does, then it adds it to a whitelist.*/
    if(mode == "Meaty"){
        recip.forEach(i => {
            if (i.tags.includes("Meaty")) {
                validOptions.push(true);
            }else{
                validOptions.push(false);
            }
        });
    }else if(mode == "Vegan"){
        recip.forEach(i => {
            if (i.tags.includes("Vegan")) {
                validOptions.push(true);
            }else{
                validOptions.push(false);
            }
        });
    }else if(mode == "Kosher"){
        recip.forEach(i => {
            if (i.tags.includes("Kosher")) {
                validOptions.push(true);
            }else{
                validOptions.push(false);
            }
        });
    }else{
        for (let index = 0; index < recipeHolders.length; index++) {
            validOptions.push(true);
        }

        console.log("Incorrect mode settings");
    }

    console.log(recipeHolders);

    /*This code displays the whitelist items and hides
    the blacklist ones. */

    for (let index = 0; index < recipeHolders.length; index++) {
        if (!validOptions[index]) {
            recipeHolders[index].style.display = "none";
        }else{
            recipeHolders[index].style.display = "block";
        }
    }
}


export default filterRecipes;