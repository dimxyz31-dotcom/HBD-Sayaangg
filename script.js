// ================================
// OPEN GIFT
// ================================

const openBtn = document.getElementById("openGift");
const giftSection = document.getElementById("giftSection");
const music = document.getElementById("bgMusic");
const typing = document.getElementById("typing");

const letter = `Tulis suratmu di sini...

Kamu bisa mengganti semua isi pesan ini dengan kata-kata versimu sendiri.

Terima kasih sudah hadir di hidupku.
Semoga halaman kecil ini bisa membuatmu tersenyum.

❤️`;

typing.innerHTML = "";

openBtn.addEventListener("click", () => {

    document.querySelector(".hero").style.display = "none";

    giftSection.style.display = "block";

    music.play().catch(() => {});

    typeWriter();

    createConfetti();

});

// ================================
// TYPEWRITER
// ================================

let i = 0;

function typeWriter(){

    if(i < letter.length){

        typing.innerHTML += letter.charAt(i);

        i++;

        setTimeout(typeWriter,35);

    }

}

// ================================
// FLOATING HEART
// ================================

const hearts = document.querySelector(".hearts");

setInterval(()=>{

    const heart=document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML="❤";

    heart.style.left=Math.random()*100+"%";

    heart.style.fontSize=(15+Math.random()*30)+"px";

    heart.style.animationDuration=(6+Math.random()*5)+"s";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },10000);

},300);

// ================================
// CONFETTI
// ================================

function createConfetti(){

    for(let i=0;i<120;i++){

        const confetti=document.createElement("div");

        confetti.style.position="fixed";

        confetti.style.left=Math.random()*100+"vw";

        confetti.style.top="-20px";

        confetti.style.width="8px";

        confetti.style.height="15px";

        confetti.style.background=`hsl(${Math.random()*360},90%,70%)`;

        confetti.style.opacity="0.9";

        confetti.style.transform=`rotate(${Math.random()*360}deg)`;

        confetti.style.transition="4s linear";

        document.body.appendChild(confetti);

        setTimeout(()=>{

            confetti.style.top="110vh";

            confetti.style.transform=`rotate(${Math.random()*720}deg)`;

        },100);

        setTimeout(()=>{

            confetti.remove();

        },4500);

    }

    }
