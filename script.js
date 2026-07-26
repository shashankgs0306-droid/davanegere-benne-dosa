// Smooth scrolling navigation

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});




// Header shadow on scroll

window.addEventListener("scroll", function(){

    const header = document.querySelector("header");

    if(window.scrollY > 50){

        header.style.boxShadow =
        "0 5px 20px rgba(0,0,0,.3)";

    }

    else{

        header.style.boxShadow="none";

    }

});




// Welcome animation

window.addEventListener("load",()=>{

    document.querySelector(".hero-content")
    .style.transform="translateY(0)";

});
