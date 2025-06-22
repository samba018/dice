var images = ["dice1.jpg", "dice2.jpg", "dice3.jpg", "dice4.jpg", "dice5.jpg", "dice6.jpg"];

function rol() {
    let count = 0;
    let timer = setInterval(function () {
        let i=Math.floor(Math.random()*6);
        document.getElementById("slide").src=images[i]
        count++;
        if (count === 5) {
            clearInterval(timer); // stop after 5 times
        }
        let final = Math.floor(Math.random() * 6);
        document.getElementById("slide").src = images[final];
    }, 400); // 500ms = 0.5 seconds
}

