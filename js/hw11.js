const API = 'http://www.omdbapi.com/?apikey=721371';
const FORM = document.getElementById("movieSearch");
let movName = '';
let movType = '';
let currentPage = 1;

function sendRequest() {
    var req = new XMLHttpRequest();
    req.responseType = 'json';
    req.open('GET', `${API}&s=${movName}&type=${movType}&page=${currentPage}`, true);
    req.onload = function () {
        if (this.status == 200) {
            printResponse(this.response)
            printPages(this.response['totalResults']);
        } else alert('Oops! Something went wrong.');
    };
    req.send(null);
}

function printResponse(response) {
    if (response['Response'] === 'False') {
        $(".result").append(`<p class='error'>${response['Error']}</p>`);
        return;
    }

    $(".result").append(`<ol class='result-list' start='${(currentPage - 1) * 10 + 1}'></ol>`);

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
    if (!totalResults) return;

    $(".result").append(`<ul class='result-pages'></ul `);
    for (let i = 1; i <= Math.ceil(totalResults / 10); i++) {
        $(".result-pages").append(`<li class="result-pages__page">${i}</li>`);
    }
    $(".result-pages__page")[currentPage - 1].classList.add('result-pages__page--current');

    let pages = document.getElementsByClassName("result-pages");
    pages[0].addEventListener('click', function (event) {
        $(".result").empty();
        currentPage = event.target.innerText;
        sendRequest();
    })
}

window.addEventListener("load", function () {
    FORM.addEventListener("submit", function (event) {
        $(".result").empty();
        currentPage = 1;
        event.preventDefault();

        const FD = new FormData(FORM);
        movName = FD.get('name');
        movType = FD.get('type');

        sendRequest();
    });
});
