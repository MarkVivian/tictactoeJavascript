const tic = document.querySelectorAll(".box");
const text = document.querySelector(".player");
const circle = document.querySelector(".circle");
const axe = document.querySelector(".x");

function reload(){
    //this will reload the page.
    location.reload();
}

circle.onclick = ()=>{
    //will set the text inside the text div.
    text.innerText = "O"
}

axe.onclick = ()=>{
    text.innerText = "X"
}

tic.forEach(value => {
    value.addEventListener("click", ()=>{
        //the AI which will play against the player.
        var computer = Math.floor(Math.random() * 10);

        /*
        will check the text in the text div and if it is x, 
        it will replace the shape being originally used 
        */
        if(text.innerText == "X"){
            value.classList.add("treasure");
        }else if(text.innerText == "O"){
            value.classList.add("hole");
        }



    
    })
});

        //FOR LEARNING PURPOSES.
/*
the variable.classList.contains("value") will check if the class value is in the variable stated
and return true if found.
        EXAMPLE
    if(value.classList.contains("hole")){
        console.log("the class hole is present in value")
    }
*/
        