/* This code is responsible for resetting the display status of 
all elements */ 

// It's just a more streamlined version of the normal filter

function DisplayAll() {
    const divs = document.querySelectorAll(".recipeHolder");
    // This gets the divs that hold the recipes
    
    // It just sets everything back to basic

    divs.forEach(div => {
            div.style.display = "block";
            const inst= div.childNodes[2];

            inst.style.display = "none"
    });
}

export default DisplayAll;