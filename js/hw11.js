const API = 'http://www.omdbapi.com/?apikey=721371';
let movName = '';
let movType = '';

function printResponse(response) {
    if (response['Response'] === 'False') {
        $(".result").append(`<p class='error'>${response['Error']}</p>`);
        return;
    }

    $(".result").append(`<ol class='result-list'></ol>`);

    response['Search'].forEach(element => {
        let poster = (element['Poster'] != 'N/A') ? `<img src="${element['Poster']}" alt="${element['Title']} poster" class="result-el__poster">` : '';

        $(".result-list").append(`<li>      
                                        <aticle class="result-el">
                                            <div>
                                                <header class="result-el__header">${element['Title']}</header>
                                                <p class="result-el__year">${element['Year']}</p>
                                            </div>
                                            ${poster}
                                        </aticle>
                                    </li>`);
    });
}

function printPages(totalResults) {
    $(".result").append(`<ul class='result-pages'></ul `);

    for (let i = 1; i <= Math.ceil(totalResults / 10); i++) {
        $(".result-pages").append(`<li class="result-pages__page">${i}</li>`);
    }

    let pages = document.getElementsByClassName("result-pages");
    pages[0].addEventListener('click', function (event) {
        console.log(event);
        console.log(event.target.innerText);

        $(".result").empty();

        var req = new XMLHttpRequest();
        req.responseType = 'json';
        req.open('GET', `${API}&s=${movName}&type=${movType}&page=${event.target.innerText}`, true);
        req.onload = function () {
            if (this.status == 200) {
                printPages(this.response['totalResults']);
                printResponse(this.response)
            } else alert('Oops! Something went wrong.');
        };
        req.send(null);
    })
}

window.addEventListener("load", function () {
    const FORM = document.getElementById("movieSearch");

    FORM.addEventListener("submit", function (event) {
        $(".result").empty();
        event.preventDefault();

        const FD = new FormData(FORM);

        movName = FD.get('name');
        movType = FD.get('type');

        var req = new XMLHttpRequest();
        req.responseType = 'json';
        req.open('GET', `${API}&s=${movName}&type=${movType}`, true);
        req.onload = function () {
            if (this.status == 200) {
                printPages(this.response['totalResults']);
                printResponse(this.response)
            } else alert('Oops! Something went wrong.');
        };
        req.send(null);
    });

    // debug
    var req = new XMLHttpRequest();
    req.responseType = 'json';

    movName = 'blade';
    movType = 'movie';

    req.open('GET', `${API}&s=blade&type=movie`, true);
    req.onload = function () {
        printPages(this.response['totalResults']);
        printResponse(this.response)
    };
    req.send(null);
});
