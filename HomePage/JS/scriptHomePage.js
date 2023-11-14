
document.addEventListener("DOMContentLoaded", function() {
    function ChangeColorH1() {
        let rgb1 = Math.floor(Math.random() * 256);
        let rgb2 = Math.floor(Math.random() * 256);
        let rgb3 = Math.floor(Math.random() * 256);
        let colorString = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
        document.querySelector(".HomePageTitle").style.background = colorString
        document.querySelector(".HomePageTitle").style.transition = "0.5s linear";
    }

    document.querySelector(".HomePageTitle").addEventListener("mouseenter", ChangeColorH1);

    function ImageJS () {
        

        if (counter % 2 === 0) { 
            document.querySelector(".imageJS").src ="HomePage/Ressources/HTML5.webp"} else {
        document.querySelector(".imageJS").src ="HomePage/Ressources/imageJS.jpg"
            }
            console.log(counter);
            counter += 1;
    }

    document.querySelector(".imageJS").addEventListener("click", ImageJS);


const maDiv = document.querySelector('.nav__main');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition >= 600 && scrollPosition <900) {
        maDiv.style.transform = "translateY(+100%)"
    } else if (scrollPosition >= 900 && scrollPosition <1200) {
        maDiv.style.transform = "translateY(+200%)"
    } else if (scrollPosition >= 1200 && scrollPosition < 1500) {
        maDiv.style.transform = "translateY(+300%)"}
    else if (scrollPosition >= 1500) {
            maDiv.style.transform = "translateY(+400%)"}
    else {
        maDiv.style.transform = "translateY(0%)"
    }
});

function grow () {
    document.querySelector(".imagePG").style.animation = ""
}



document.querySelector(".Bio_Fleche").addEventListener("click", grow )
});

        let counter = 0 ;
        