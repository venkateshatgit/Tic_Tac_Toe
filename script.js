"use strict";

// Assignment 5: Tic Tac Toe
// Your name here

function checkFor(marker){
    console.log(marker);
    
}

let counter=0;
function clickedBox(i){

    let box=document.getElementById(i);

    if(!box.classList.contains("X-marker") && !box.classList.contains("O-marker")){

        if(counter%2==0){
            box.classList.add("X-marker");
            checkFor("X");
            counter+=1;
        }
            
        else if(counter%2==1){
            box.classList.add("O-marker");
            checkFor("O");
            counter+=1;
        }
                
    }
    
}

