

function Search(compText) {
    compText.toLowerCase();

    if (compText != '') {
        const divs = document.querySelectorAll(".recipeHolder");

        divs.forEach(div => {
            const recipeName = div.childNodes[0].innerText.toLowerCase(); 

            if(!recipeName.includes(compText)){
                div.style.display = "none"
            }
        });
    }else{
        const divs = document.querySelectorAll(".recipeHolder");

        divs.forEach(div => {
            div.style.display = "block"
        });

    }
}


export default Search;