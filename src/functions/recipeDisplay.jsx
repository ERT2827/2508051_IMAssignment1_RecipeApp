import React from "react";
import star from "../929495.png";

//I used this as the basis for my hiding code: https://www.reddit.com/r/learnjavascript/comments/vb329t/hide_all_elements_except_for_one/

// This function is added to all the recipe titles to focus them on click
function setAsFocus(myID) {
    const divs = document.querySelectorAll(".recipeHolder");
    // This finds all the recipe holders
    const inst = document.getElementById(myID).childNodes[2];
    // This gets the <P> for the recipe instructions

    // console.log(inst);

    inst.style.display = "block";
    // This makes the instructions visible

    // This is what I'm using to hide the other recipes.
    divs.forEach(div => {
        if(div.id != myID){
            div.style.display = "none";
            /*Should I be using class names and styles for this?
            Probably not, but they're the best solution I have
            right now. */
        }
    });
}

function setFavourite(data, id) {
    // console.log(id);
    const favIcon = document.getElementById(id).childNodes[0].childNodes[1];
    // This gets the favourite icon


    let isFav = false;
    // This is used to check if something is a favourite

    data.recipes.forEach(e => {
        if(e.isFavourite && e.id == id){
            e.isFavourite = false; 
        }else if(e.id == id){
            e.isFavourite = true;
            isFav = true;
        }
    });

    // I used this site to calculate the filters required to change my pixel to another colour: https://codepen.io/sosuke/pen/Pjoqqp

    if (isFav) {
        favIcon.style.filter= "invert(82%) sepia(92%) saturate(6021%) hue-rotate(358deg) brightness(105%) contrast(101%)";
    }else{
        favIcon.style.filter= "";
    }

}


//I used this code to make my mapping: https://medium.com/@harshkrl123/how-to-fetch-and-display-json-data-in-react-js-c7ce99acf7f7

// This function maps and displays all the recipes

function RecipeDisplay(props){
    const {data} = props;
    // This gets the data from the main app

    const list = data.recipes.map((d) => {
        // This function makes a list of code blocks to output.
        return(
            <div id={d.id} className="recipeHolder">
                <section className="nameRow">
                    <h2 className="recipeName" onClick={() => setAsFocus(d.id)}>{d.name}</h2>
                    <img src={star} alt="A picture of a star" onClick={() => setFavourite(data, d.id)}/>
                </section>
                <h3>{d.tags}</h3>
                <p className="hidden">{d.instructions}</p>
            </div>
        );
    })


    /* This return just displays it. Which in hindsight might
    be unnessecary, but I didn't know better at the time. */
    return (
        <>
            {list}
        </>
      );
}

export default RecipeDisplay;