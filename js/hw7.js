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
