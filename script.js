let currentSlide = 0;

const slides = document.querySelectorAll(".slide");


// tombol lanjut
function nextSlide() {

    slides[currentSlide].classList.remove("active");

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = slides.length - 1;
    }

    slides[currentSlide].classList.add("active");

}



// tombol buka + mulai musik
function startGift() {

    const music = document.getElementById("music");

    music.play();

    nextSlide();

}



// efek hati tambahan

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.bottom = "-20px";
    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize =
        Math.random() * 20 + 15 + "px";

    heart.style.animation =
        "floatHeart 5s linear";


    document.body.appendChild(heart);



    setTimeout(() => {

        heart.remove();

    },5000);

}


setInterval(createHeart,800);



// animasi hati

const style = document.createElement("style");


style.innerHTML = `

@keyframes floatHeart {

0% {

transform: translateY(0);

opacity:1;

}


100% {

transform: translateY(-110vh);

opacity:0;

}

}

`;


document.head.appendChild(style);
