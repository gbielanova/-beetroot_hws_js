const navItems = [].slice.call(document.querySelectorAll('.nav-item'), 1);

let observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting === true) {
            entry.target.classList.add('animate__animated', 'animate__tada');
        }
    });

}, { threshold: [1] });

let observerNav = new IntersectionObserver(function (entries) {
    if (entries.length < 2) console.log(entries);
    for (let i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting === true) {
            navItems[i].classList.add('animate__animated', 'animate__hinge', 'animate__delay-1s');
        }
    }
}, { threshold: [1] });


document.querySelectorAll(".task2-pic").forEach(element => {
    observer.observe(element);
});

document.querySelectorAll('.task2-text').forEach((el, i) => {
    if (el) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    navItems[i].classList.add('animate__animated', 'animate__hinge', 'animate__delay-1s');
                }
            });
        },
            { threshold: 1 });
        observer.observe(el);
    }
})
