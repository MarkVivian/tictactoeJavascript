const tic = document.querySelectorAll(".box");
const text = document.querySelector(".player");
const circle = document.querySelector(".circle");
const axe = document.querySelector(".x");
const reload = document.querySelector(".reload");

circle.onclick = ()=>{
    //will set the text inside the text div.
    text.innerText = "O"
}

axe.onclick = ()=>{
    text.innerText = "X"
}

reload.onclick = ()=> {
    //will reload the page.
    location.reload();
}


tic.forEach(value => {
    value.addEventListener("click", ()=>{
        //the AI which will play against the player.
        function computer(){
            var value = Math.floor(Math.random() * 10);
            return value;
        }

        /*
        will check the text in the text div and if it is x, 
        it will replace the shape being originally used 
        */
        if(text.innerText == "X"){
            value.classList.remove("hole");
            value.classList.add("treasure");
        }else if(text.innerText == "O"){
            value.classList.remove("treasure");
            value.classList.add("hole");
        }
        
        value.onclick = ()=>{
            value.getEle
        }




        /*
        the variable.classList.contains("value") will check if the class value is in the variable stated
        and return true if found.
                EXAMPLE
            if(value.classList.contains("hole")){
                console.log("the class hole is present in value")
            }
        */
        
    
    })
});