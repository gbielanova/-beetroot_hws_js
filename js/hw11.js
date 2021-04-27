const API = 'http://www.omdbapi.com/?apikey=721371';

function printResponse(response) {
    console.log(response['Error']);
    console.log(response['Response']);

    if (response['Response'] == 'False') {
        $(".result").append(`<p class='error'>${response['Error']}</p>`);
        return;
    }

}

window.addEventListener("load", function () {
    const FORM = document.getElementById("movieSearch");

    FORM.addEventListener("submit", function (event) {
        event.preventDefault();

        const FD = new FormData(FORM);

        var req = new XMLHttpRequest();
        req.responseType = 'json';
        req.open('GET', `${API}&t=${FD.get('name')}&type=${FD.get('type')}`, true);
        req.onload = function () {
            (this.status == 200) ? printResponse(this.response) : alert('Oops! Something went wrong.');
        };
        req.send(null);
    });
});