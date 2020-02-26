let container = document.getElementById("container");
let counter = document.getElementById("counter");
let base = "https://static-cdn.jtvnw.net/emoticons/v1/INDEX/3.0";

let stepSize = 1000;

let c = 0;

load();
function load(){
    for(let i = c; i <= c+stepSize; i++){
        counter.innerHTML = "Memecount: " + i;
        let url = base.replace("INDEX", i);
        let img = document.createElement("img");
        img.src = url
        container.appendChild(img);
    }
    c+=stepSize;
}


window.onscroll = (e) => {
    var d = document.documentElement;
    var viewportHeight = window.innerHeight;
    var elementHeight = d.offsetHeight;

    // Current Y position on page + viewportHeight = total element Height
    if (viewportHeight+window.scrollY === elementHeight) {
      load();
    }
};

