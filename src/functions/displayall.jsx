// This code is responsible for resetting the display status of 
// all elements

function DisplayAll() {
    const divs = document.querySelectorAll(".recipeHolder");
    
    // It just sets everything back to basic

    divs.forEach(div => {
            div.style.display = "block";
            const inst= div.childNodes[2];

            inst.style.display = "none"
    });
}

export default DisplayAll;