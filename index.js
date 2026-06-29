



// Suivre ou ne plus suivre une page


const follow = document.querySelectorAll(".isfollower");

follow.forEach(el => {
    
let isfollowing = false;

el.addEventListener("click",() => {
isfollowing = !isfollowing;
    if(isfollowing === false) {
        el.textContent = "+ Follow";      
    }
    else {
        el.textContent = "✓ Following";
    }
    el.style.padding = "5px";
    el.style.fontSize = "0.75em";
});
});


// liker une publication version 1
const love = document.querySelectorAll(".islove");
const lovetexte = document.querySelectorAll(".isLoveTexte");

love.forEach ((el, index) => {
    let isloving = false;

el.addEventListener("click",() => {
    isloving = !isloving;

    if(isloving === false) {
        el.style.color = "black";
        lovetexte[index].textContent = "Like";
        lovetexte[index].style.fontSize = "0.65em";
    }
    else {
        el.style.color = "blue";
        lovetexte[index].textContent = " ";
    }
});
});