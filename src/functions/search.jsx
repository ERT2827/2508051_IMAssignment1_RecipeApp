
/* This function does admittedly have a problem 
that you can't search and filter at the same time, which I 
realized that I could fix by using context and having two
arrays (a sorted one and an unsorted one) then filtering the
sorted one. But that said, I don't think it's nessecary here
and I ran out of time to do such a drastic rework. */
function Search(compText) {
    compText.toLowerCase();
    /*This gets the text to compare from the text box. It also
    sets everything as lowercase to make comparisons easier*/

    if (compText != '') {
        // This code reuses the filter function to search
        const divs = document.querySelectorAll(".recipeHolder");

    
        divs.forEach(div => {
            const recipeName = div.childNodes[0].innerText.toLowerCase(); 
            // This makes the recipe names readable

            if(!recipeName.includes(compText)){
                // The code displays all text that includes the search parameter
                div.style.display = "none"
            }
        });

    }else{
        //And code shows all if the search box is empty.
        const divs = document.querySelectorAll(".recipeHolder");

        divs.forEach(div => {
            div.style.display = "block"
        });

    }
}


export default Search;