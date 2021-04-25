// task1

// building HTML

// wrapper for entire block
$(".farcry__section").append('<article class="card"></article>');

// navigation
$(".card").append('<ul class="nav"></nav>');
$(".nav").append(`<li class="nav-item nav-item--active">
                    <svg class="nav-item__icon nav-item__icon--active"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><g><path fill="#bdc3c7" d="M20.4 19h-3.62l-3.79 3.79a1.395 1.395 0 0 1-1.98 0L7.22 19H3.6a2.8 2.8 0 0 1-2.8-2.8V3.599a2.8 2.8 0 0 1 2.8-2.8h16.8a2.8 2.8 0 0 1 2.8 2.8v12.6a2.8 2.8 0 0 1-2.8 2.8zm0-14A1.4 1.4 0 0 0 19 3.598H5a1.4 1.4 0 0 0-1.4 1.4v9.8A1.4 1.4 0 0 0 5 16.2h2.8c.386 0 .736.157.99.41L12 19.82l3.21-3.21c.253-.253.603-.41.99-.41H19a1.4 1.4 0 0 0 1.4-1.4zm-4.2 8.4H7.8a1.4 1.4 0 1 1 0-2.8h8.4a1.4 1.4 0 0 1 0 2.8zm0-4.201H7.8a1.4 1.4 0 1 1 0-2.8h8.4a1.4 1.4 0 0 1 0 2.8z"/><path fill="#fff" d="M20.4 19h-3.62l-3.79 3.79a1.395 1.395 0 0 1-1.98 0L7.22 19H3.6a2.8 2.8 0 0 1-2.8-2.8V3.599a2.8 2.8 0 0 1 2.8-2.8h16.8a2.8 2.8 0 0 1 2.8 2.8v12.6a2.8 2.8 0 0 1-2.8 2.8zm0-14A1.4 1.4 0 0 0 19 3.598H5a1.4 1.4 0 0 0-1.4 1.4v9.8A1.4 1.4 0 0 0 5 16.2h2.8c.386 0 .736.157.99.41L12 19.82l3.21-3.21c.253-.253.603-.41.99-.41H19a1.4 1.4 0 0 0 1.4-1.4zm-4.2 8.4H7.8a1.4 1.4 0 1 1 0-2.8h8.4a1.4 1.4 0 0 1 0 2.8zm0-4.201H7.8a1.4 1.4 0 1 1 0-2.8h8.4a1.4 1.4 0 0 1 0 2.8z"/></g></g></svg>
                    </div><p class="nav-item__name">INFORMATION</p>
                    </li>`);
$(".nav").append(`<li class="nav-item">
                    <svg class="nav-item__icon" xmlns="http://www.w3.org/2000/svg" width="19" height="21" viewBox="0 0 19 21"><g><g opacity=".7"><path fill="#bdc3c7" d="M18.993 11.308c0 2.678-2.125 4.849-4.747 4.849-1.554 0-2.914-.775-3.774-1.957l-.023.017-.95-1.293-.949 1.293-.013-.01c-.866 1.177-2.231 1.95-3.784 1.95-2.621 0-4.746-2.171-4.746-4.85 0-1.091.366-2.089.962-2.9l-.013-.01S7.918-.007 9.5-.007c1.582 0 8.543 8.406 8.543 8.406l-.013.01c.596.81.963 1.808.963 2.9zM7.918 17.773v-1.616c0-.892.708-1.617 1.582-1.617.874 0 1.582.725 1.582 1.617v1.616c.874 0 1.582.724 1.582 1.617 0 .892-.708 1.617-1.582 1.617H7.918c-.874 0-1.582-.725-1.582-1.617 0-.893.708-1.617 1.582-1.617z"/><path fill="#b7bacd" d="M18.993 11.308c0 2.678-2.125 4.849-4.747 4.849-1.554 0-2.914-.775-3.774-1.957l-.023.017-.95-1.293-.949 1.293-.013-.01c-.866 1.177-2.231 1.95-3.784 1.95-2.621 0-4.746-2.171-4.746-4.85 0-1.091.366-2.089.962-2.9l-.013-.01S7.918-.007 9.5-.007c1.582 0 8.543 8.406 8.543 8.406l-.013.01c.596.81.963 1.808.963 2.9zM7.918 17.773v-1.616c0-.892.708-1.617 1.582-1.617.874 0 1.582.725 1.582 1.617v1.616c.874 0 1.582.724 1.582 1.617 0 .892-.708 1.617-1.582 1.617H7.918c-.874 0-1.582-.725-1.582-1.617 0-.893.708-1.617 1.582-1.617z"/></g></g></svg>
                    <p class="nav-item__name">RATINGS INFO</p>
                    </li>`);
$(".nav").append(`<li class="nav-item">
                    <svg class="nav-item__icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><g opacity=".7"><path fill="#bdc3c7" d="M19.946 7.765l.024.006-2.5 11.25-.024-.006c-.125.559-.6.984-1.196.984H3.75c-.596 0-1.071-.425-1.196-.984l-.024.006L.03 7.77l.024-.006C.034 7.677 0 7.594 0 7.5c0-.691.56-1.25 1.25-1.25h2.5a6.25 6.25 0 1 1 12.5 0h2.5c.69 0 1.25.559 1.25 1.25 0 .094-.034.177-.054.265zM10 2.5a3.75 3.75 0 0 0-3.75 3.75h7.5A3.75 3.75 0 0 0 10 2.5zm5 8.75c-.69 0-1.25-.56-1.25-1.25V8.75h-7.5V10a1.25 1.25 0 1 1-2.5 0V8.75h-.942l1.945 8.75h10.494l1.945-8.75h-.942V10c0 .69-.56 1.25-1.25 1.25z"/><path fill="#b7bacd" d="M19.946 7.765l.024.006-2.5 11.25-.024-.006c-.125.559-.6.984-1.196.984H3.75c-.596 0-1.071-.425-1.196-.984l-.024.006L.03 7.77l.024-.006C.034 7.677 0 7.594 0 7.5c0-.691.56-1.25 1.25-1.25h2.5a6.25 6.25 0 1 1 12.5 0h2.5c.69 0 1.25.559 1.25 1.25 0 .094-.034.177-.054.265zM10 2.5a3.75 3.75 0 0 0-3.75 3.75h7.5A3.75 3.75 0 0 0 10 2.5zm5 8.75c-.69 0-1.25-.56-1.25-1.25V8.75h-7.5V10a1.25 1.25 0 1 1-2.5 0V8.75h-.942l1.945 8.75h10.494l1.945-8.75h-.942V10c0 .69-.56 1.25-1.25 1.25z"/></g></g></svg>
                    <p class="nav-item__name">WHERE TO BUY</p>
                    </li>`);

//wrapper main part
$(".card").append('<div class="card-main"></div>');

//wrapper left part wth image and rating
$(".card-main").append('<div class="card-left"></div>');
$(".card-left").append('<img src="img/poster.png" alt="FarCry poster" class="card-img" />');
$(".card-left").append('<div class="card-rating"></div>');
$(".card-rating").append('<img src="img/favourite.svg" alt="full star" class="card-rating__star" />');
$(".card-rating").append('<img src="img/favourite.svg" alt="full star" class="card-rating__star" />');
$(".card-rating").append('<img src="img/favourite.svg" alt="full star" class="card-rating__star" />');
$(".card-rating").append('<img src="img/favourite.svg" alt="full star" class="card-rating__star" />');
$(".card-rating").append('<img src="img/favourite_grey.svg" alt="empty star" class="card-rating__star" />');

//wrapper right part with text
$(".card-main").append('<div class="card-right"></div>');

//wrapper for header and score
$(".card-right").append('<div class="card-right__header"></div>');
$(".card-right__header").append('<div class="card-right__header-texts"></div>');
$(".card-right__header-texts").append('<header class="card-header">FarCry 4</header>');
$(".card-right__header-texts").append('<p class="card-release">First Released Nov 17, 2014</p>');
$(".card-right__header").append('<img src="img/score.png" alt="score" class="card-score" />');

//description
$(".card-right").append('<p class="card-right__description">In Far Cry 4, players find themselves in Kyrat, a breathtaking, perilous and wild region of the Himalayas struggling under the regime of a despotic self - appointed king.</p > ');

//wrapper for discount, price and buy
$(".card-right").append('<div class="card-right__buy"></div>');
$(".card-right__buy").append('<div class="card-right__price"></div>');
$(".card-right__price").append('<p class="card-right__price-off">20% OFF!</p>');
$(".card-right__price").append('<p class="card-right__price-usd">$59.96</p>');
$(".card-right__buy").append('<button class="card-right__btn">BUY IT NOW</button>');



