/* ========================= */
/* JS PART 1 */
/* SCENE + LOADING + MUSIC */
/* ========================= */


const scenes = document.querySelectorAll(".scene");


function showScene(id){

    scenes.forEach(scene=>{

        scene.classList.remove("active");

    });


    const target = document.getElementById(id);


    if(target){

        target.classList.add("active");

    }

}



/* ========================= */
/* MUSIC */
/* ========================= */


const music = document.getElementById("music");


function startMusic(){

    if(music){

        music.volume = 0.5;

        music.play();

    }

}



/* ========================= */
/* LOADING */
/* ========================= */


window.addEventListener("load",()=>{


    setTimeout(()=>{


        showScene("gameScene");


    },4000);




});





/* ========================= */
/* PUZZLE DATA */
/* ========================= */


const puzzleCards = document.querySelectorAll(".puzzle-card");


const icons = {

    apple:"🍎",

    flower:"🌸",

    rabbit:"🐰",

    gift:"🎁"

};



let firstCard = null;

let secondCard = null;

let lock = false;

let score = 0;



const gameText = document.getElementById("gameText");

const openGiftBtn = document.getElementById("openGiftBtn");



/* acak kartu */


puzzleCards.forEach(card=>{


    card.style.order = Math.floor(Math.random()*20);


});
/* ========================= */
/* JS PART 2 */
/* PUZZLE GAME LOGIC */
/* ========================= */


puzzleCards.forEach(card=>{


    card.addEventListener("click",()=>{


        if(lock) return;


        if(card.classList.contains("correct")) return;


        if(card===firstCard) return;



        const type = card.dataset.card;



        card.innerHTML = icons[type];


        card.classList.add("open");



        if(!firstCard){


            firstCard = card;


            return;


        }



        secondCard = card;


        lock = true;



        checkPair();



    });



});





function checkPair(){


    const firstType = firstCard.dataset.card;


    const secondType = secondCard.dataset.card;



    if(firstType === secondType){



        firstCard.classList.add("correct");


        secondCard.classList.add("correct");



        score++;



        gameText.innerHTML =

        "✨ Pasangan ditemukan! " + score + "/4";



        resetCards();



        if(score === 4){


            gameText.innerHTML =

            "🎉 Semua pasangan ditemukan!";



            setTimeout(()=>{


                openGiftBtn.style.display="inline-block";


            },800);



        }



    }

    else{



        setTimeout(()=>{


            firstCard.innerHTML="❓";


            secondCard.innerHTML="❓";



            firstCard.classList.remove("open");


            secondCard.classList.remove("open");



            resetCards();



        },900);



    }



}





function resetCards(){


    firstCard=null;


    secondCard=null;


    lock=false;


}





/* ========================= */
/* OPEN GIFT */
/* ========================= */


if(openGiftBtn){



    openGiftBtn.addEventListener("click",()=>{


        startMusic();


        showScene("cakeScene");


    });



}
/* ========================= */
/* JS PART 3 */
/* CAKE + CANDLE */
/* ========================= */


const blowBtn = document.getElementById("blowBtn");

const flame = document.getElementById("flame");

const wishText = document.getElementById("wishText");

const nextFlowerBtn = document.getElementById("nextFlowerBtn");



let candleDone = false;



if(blowBtn){


    blowBtn.addEventListener("click",()=>{



        if(candleDone) return;



        candleDone = true;



        /* matikan api */


        flame.classList.add("off");



        blowBtn.innerHTML =

        "✨ Lilin Sudah Padam";



        blowBtn.disabled=true;




        wishText.innerHTML =

        `
        🤍 Semoga semua doa baik yang kamu simpan
        perlahan menemukan jalannya.

        <br><br>

        Semoga kamu selalu diberi kesehatan,
        kebahagiaan, rezeki yang luas,
        dan dikelilingi orang-orang yang tulus menyayangimu.

        <br><br>

        Selamat ulang tahun, sayang 🎂❤️
        `;



        createConfetti();



        setTimeout(()=>{


            nextFlowerBtn.style.display="inline-block";


        },1500);



    });


}





/* ========================= */
/* KE BUNGA */
/* ========================= */


if(nextFlowerBtn){


    nextFlowerBtn.addEventListener("click",()=>{


        showScene("flowerScene");


        startFlowerEffect();


    });


}





/* ========================= */
/* CONFETTI */
/* ========================= */


function createConfetti(){



    const items=[

        "🎉",
        "✨",
        "🌸",
        "💖",
        "🎊"

    ];



    for(let i=0;i<40;i++){



        const confetti =
        document.createElement("div");



        confetti.className="confetti";



        confetti.innerHTML =

        items[
            Math.floor(
                Math.random()*items.length
            )
        ];



        confetti.style.left =

        Math.random()*100+"vw";



        confetti.style.animationDuration =

        (3+Math.random()*3)+"s";



        document.body.appendChild(confetti);



        setTimeout(()=>{


            confetti.remove();



        },6000);



    }



}
/* ========================= */
/* JS PART 4 */
/* FLOWER + PHOTO + ENDING */
/* ========================= */


/* ========================= */
/* FLOWER EFFECT */
/* ========================= */


let flowerStarted = false;


function startFlowerEffect(){


    if(flowerStarted) return;


    flowerStarted = true;


    createPetals();


}





function createPetals(){


    const petals = [

        "🌸",
        "🌹",
        "🌷",
        "✨"

    ];



    setInterval(()=>{


        if(
            document
            .getElementById("flowerScene")
            .classList.contains("active")
        ){


            const petal =
            document.createElement("div");



            petal.className="petal";


            petal.innerHTML =

            petals[
                Math.floor(
                    Math.random()*petals.length
                )
            ];



            petal.style.left =

            Math.random()*100+"vw";



            petal.style.animationDuration =

            (4+Math.random()*3)+"s";



            document.body.appendChild(petal);



            setTimeout(()=>{


                petal.remove();


            },7000);



        }



    },500);



}







/* ========================= */
/* BUNGA KE FOTO */
/* ========================= */



const nextPhotoBtn =

document.getElementById("nextPhotoBtn");



if(nextPhotoBtn){


    nextPhotoBtn.addEventListener("click",()=>{


        showScene("photoScene1");


    });


}






/* ========================= */
/* FOTO FLOW */
/* ========================= */



const nextPhoto2 =

document.getElementById("nextPhoto2");



if(nextPhoto2){


nextPhoto2.addEventListener("click",()=>{


    showScene("photoScene2");


});


}






const nextPhoto3 =

document.getElementById("nextPhoto3");



if(nextPhoto3){


nextPhoto3.addEventListener("click",()=>{


    showScene("photoScene3");


});


}






const nextLetter =

document.getElementById("nextLetter");



if(nextLetter){


nextLetter.addEventListener("click",()=>{


    showScene("letterScene");


});


}






/* ========================= */
/* LETTER KE ENDING */
/* ========================= */



const nextEnding =

document.getElementById("nextEnding");



if(nextEnding){


nextEnding.addEventListener("click",()=>{


    showScene("endingScene");


    startEndingEffect();



});


}







/* ========================= */
/* ENDING EFFECT */
/* ========================= */



let endingStarted=false;



function startEndingEffect(){


    if(endingStarted) return;


    endingStarted=true;


    createHearts();


    createConfetti();


}





function createHearts(){



    setInterval(()=>{


        if(
            document
            .getElementById("endingScene")
            .classList.contains("active")
        ){


            const heart =

            document.createElement("div");



            heart.className="heart";


            heart.innerHTML="❤️";



            heart.style.left=

            Math.random()*100+"vw";



            heart.style.animationDuration=

            (5+Math.random()*3)+"s";



            document.body.appendChild(heart);



            setTimeout(()=>{


                heart.remove();


            },8000);



        }



    },700);



              }
