let currentSlide = 0;

const slides = document.querySelectorAll(".slide");


function nextSlide() {

    // sembunyikan slide sekarang
    slides[currentSlide].classList.remove("active");

    // pindah ke slide berikutnya
    currentSlide++;

    // kalau sudah terakhir, tetap di akhir
    if (currentSlide >= slides.length) {
        currentSlide = slides.length - 1;
    }

    // tampilkan slide baru
    slides[currentSlide].classList.add("active");

}


// efek hati tambahan
function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.bottom = "-20px";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.animation = "float 5s linear";

    document.body.appendChild(heart);


    setTimeout(() => {
        heart.remove();
    }, 5000);

}


setInterval(createHeart, 800);


// animasi hati
const style = document.createElement("style");

style.innerHTML = `

@keyframes float {

    0% {
        transform: translateY(0);
        opacity: 1;
    }

    100% {
        transform: translateY(-110vh);
        opacity: 0;
    }

}

`;

document.head.appendChild(style);
