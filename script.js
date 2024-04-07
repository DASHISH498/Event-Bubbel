var timer = 60;
var score = 0;
var hitrn = 0;

function increasescore () {
    score += 10;
    document.querySelector("#changescore").textContent = score;
}

function getNewHit () {
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitchange").textContent = hitrn;
}

function makeBubble () {
    var clutter = "";

    for (var i = 1; i<=168; i++){
        var vn = Math.floor(Math.random()*10)
        clutter += `<div class="bubble">${vn}</div>`;
    }

    document.querySelector("#pbottom").innerHTML = clutter;
}


function runTimer() {
    var timerclear = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else {
            clearInterval(timerclear);
            document.querySelector("#pbottom").innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000);

}

document.querySelector("#pbottom").addEventListener("click", function(dets){
    var numbercliked = Number(dets.target.textContent);
    if(numbercliked === hitrn) {
        increasescore();
        makeBubble();
        getNewHit();
    }
})

getNewHit();
runTimer();
makeBubble();