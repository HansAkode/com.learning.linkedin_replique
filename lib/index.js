


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

// créer une barre de recherche

// addEventListener("action_lesteening", () => {} fonction_applying);

const researchInput = document.querySelector("#search_bar");
const researchOutput = document.querySelector(".research_results");
const researchValue = ["Jean", "Paul", "Jacques", "Pierre", "Marie", "Sophie", "Lucie", "Julien", "Antoine", "Claire"];

researchInput.addEventListener("keyup", () => {
    const query = researchInput.value.toLowerCase().trim();
    researchOutput.innerHTML = "";

    if (query === "") {
        researchOutput.style.visibility = "hidden";
        return;
    }

    const filteredResults = researchValue.filter(name => name.toLowerCase().includes(query));

    filteredResults.forEach(name => {
        const item = document.createElement("div");
        item.className = "result_item";
        item.textContent = name;
        researchOutput.appendChild(item);
    });

    researchOutput.style.visibility = "visible";
});


// Ajout des commentaires sur les publications



const commentButtons = document.querySelector(".re3 h4");

const addComment = document.querySelector(".icon4");

const allComments = document.querySelector(".commentsList");
const writeComment = document.querySelector("#commentInput");

writeComment.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        const commentText = writeComment.value.trim();
        if (commentText === "") return;

        const item = document.createElement("div");
        item.className = "comment_item";
        item.textContent = commentText;
        allComments.appendChild(item);
        writeComment.value = "";
    }
});









// Ajouter des publications dynamiquement

const postContainer = document.getElementById("post_container");

const posts = getPosts();

console.log(posts);


posts.forEach(post => {
    const postCardHTML = postCardTemplate(post);
    console.log(postCardHTML);
    postContainer.insertAdjacentHTML("beforeend", postCardHTML);
});