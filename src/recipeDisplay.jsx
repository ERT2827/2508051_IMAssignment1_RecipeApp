import React from "react";
import star from "./929495.png";

//I used this as the basis for my hiding code: https://www.reddit.com/r/learnjavascript/comments/vb329t/hide_all_elements_except_for_one/

function setAsFocus(myID) {
    const divs = document.querySelectorAll(".recipeHolder");
    const inst = document.getElementById(myID).childNodes[2];

    console.log(inst);

    inst.style.display = "block";
    
    divs.forEach(div => {
        if(div.id != myID){
            div.style.display = "none";
            //Should I be using class names and styles for this?
            //Hell no. But I'm still gonna.
        }
    });
}

function setFavourite(data, id) {
    console.log(id);

    
    const divs = document.querySelectorAll(".recipeHolder");
    const favIcon = document.getElementById(id).childNodes[0].childNodes[1];


    let isFav = false;

    data.recipes.forEach(e => {
        if(e.isFavourite && e.id == id){
            e.isFavourite = false; 
        }else if(e.id == id){
            e.isFavourite = true;
            isFav = true;
        }
    });

    if (isFav) {
        favIcon.style.filter= "invert(82%) sepia(92%) saturate(6021%) hue-rotate(358deg) brightness(105%) contrast(101%)";
    }else{
        favIcon.style.filter= "";
    }

}


//I used this code to make my mapping: https://medium.com/@harshkrl123/how-to-fetch-and-display-json-data-in-react-js-c7ce99acf7f7

function RecipeDisplay(props){
    const {data} = props;

    const list = data.recipes.map((d) => {
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

    return (
        <>
            {list}
        </>
      );
}

export default RecipeDisplay;