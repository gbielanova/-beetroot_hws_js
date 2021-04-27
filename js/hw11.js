const API = 'http://www.omdbapi.com/?apikey=721371';

function printResponse(response) {
    console.log(response);
}


window.addEventListener("load", function () {
    function sendData() {
        const XHR = new XMLHttpRequest();
        const FD = new FormData(form);

        XHR.open("GET", `${API}&t=${FD.get('name')}&type=${FD.get('type')}`, false);

        XHR.send();

        (XHR.status == 200) ? printResponse(XHR.responseText) : alert('Oops! Something went wrong.');
    }

    const form = document.getElementById("movieSearch");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        sendData();
    });
});