// task 1
const playList = [
    {
        author: "LED ZEPPELIN",
        song: "STAIRWAY TO HEAVEN"
    },
    {
        author: "QUEEN",
        song: "BOHEMIAN RHAPSODY"
    },
    {
        author: "LYNYRD SKYNYRD",
        song: "FREE BIRD"
    },
    {
        author: "DEEP PURPLE",
        song: "SMOKE ON THE WATER"
    },
    {
        author: "JIMI HENDRIX",
        song: "ALL ALONG THE WATCHTOWER"
    },
    {
        author: "AC/DC",
        song: "BACK IN BLACK"
    },
    {
        author: "QUEEN",
        song: "WE WILL ROCK YOU"
    },
    {
        author: "METALLICA",
        song: "ENTER SANDMAN"
    }
];

function printPlayList() {
    let list = document.createElement("OL");
    list.setAttribute("id", "playlist");
    document.body.appendChild(list);

    playList.forEach(element => {
        var y = document.createElement("LI");
        var t = document.createTextNode(`${element.author} - ${element.song}`);
        y.appendChild(t);
        document.getElementById("playlist").appendChild(y);
    });
}

// task 2
function showModalWindow() {
    var modal = document.getElementById("modal");
    var btn = document.getElementById("openModal");
    var closeBtn = document.getElementById("closeModal");

    btn.onclick = function () {
        modal.style.display = "block";
    }

    closeBtn.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

// task3 
let lights;
let stage = 0;

function initLights() {
    lights = document.getElementsByClassName('light');
}

function switchColor() {
    switch (stage % 4) {
        case 0:
            lights[0].style.background = 'red';
            lights[1].style.background = 'black';
            lights[2].style.background = 'black';
            break;
        case 1:
            lights[1].style.background = 'yellow';
            lights[2].style.background = 'black';
            break;
        case 2:
            lights[0].style.background = 'black';
            lights[1].style.background = 'black';
            lights[2].style.background = 'green';
            break;
        case 3:
            lights[0].style.background = 'black';
            lights[1].style.background = 'yellow';
            lights[2].style.background = 'black';
            break;
    }
    stage++;
}