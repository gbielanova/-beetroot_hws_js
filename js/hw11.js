const API = 'http://www.omdbapi.com/?apikey=721371';

function printResponse(response) {
    if (response['Response'] === 'False') {
        $(".result").append(`<p class='error'>${response['Error']}</p>`);
        return;
    }

    $(".result").append(`<ol class='result-list'></ol>`);
    response['Search'].forEach(element => {
        console.log(element);
        let poster_url = element['Poster'];
        $(".result-list").append(`<li>      
                                        <aticle class="result-el">
                                            <div>
                                                <header class="result-el__header">${element['Title']}</header>
                                                <p class="result-el__year">${element['Year']}</p>
                                            </div>
                                            <img src="${poster_url}" alt="${element['Title']} poster" class="result-el__poster">
                                        </aticle>
                                    </li>`);
    });
}

window.addEventListener("load", function () {
    const FORM = document.getElementById("movieSearch");

    FORM.addEventListener("submit", function (event) {
        event.preventDefault();

        const FD = new FormData(FORM);

        var req = new XMLHttpRequest();
        req.responseType = 'json';
        req.open('GET', `${API}&s=${FD.get('name')}&type=${FD.get('type')}`, true);
        req.onload = function () {
            (this.status == 200) ? printResponse(this.response) : alert('Oops! Something went wrong.');
        };
        req.send(null);
    });


    var req = new XMLHttpRequest();
    req.responseType = 'json';
    req.open('GET', `${API}&s=avatar&type=movie`, true);
    req.onload = function () {
        printResponse(this.response)
    };
    req.send(null);
});

