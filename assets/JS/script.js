
// ////////////////////////Navbar /////////////////////

// Navbar toggle

let hamburger = document.querySelector('.hambrger');
let navMenus = document.querySelector('.header-menus');
let closeNav = document.querySelector('.close-btn');

hamburger.addEventListener('click', () => {
    navMenus.classList.add('header-active');
});

closeNav.addEventListener('click', () => {
    navMenus.classList.remove('header-active');
});

// cOUNTER 

// window.addEventListener('scroll', reveal);

var reveals = document.querySelector('.reveal');

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
};

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {

        var windowHeight = window.innerHeight;

        var revealtop = reveals[i].getBoundingClientRect().top;

        var revealPoint = 50;

        if (revealtop < windowHeight - revealPoint) {

            let valueDisplay = document.querySelectorAll(".counts");
            let intervel = 1000;

            valueDisplay.forEach((valueDisplay) => {
                let startValue = 0;
                let endValue = parseInt(valueDisplay.getAttribute("data-val"));
                let duration = Math.floor(intervel / endValue);
                let counter = setInterval(function () {
                    startValue += 1;
                    valueDisplay.textContent = startValue;
                    if (startValue == endValue) {
                        clearInterval(counter);
                    }

                }, duration);
            });

        } else {
            reveals[i].classList.remove('active');
        };



    };
};
const observer = new IntersectionObserver(reveal, options);
observer.observe(reveals);


////////////////////// Navbar //////////////////////////////////////

function function1() {
    var load1 = document.getElementById("load1");
    var load2 = document.getElementById("load2");
    var load3 = document.getElementById("load3");
    var load4 = document.getElementById("load4");
    var load5 = document.getElementById("load5");
    var load6 = document.getElementById("load6");
    var load7 = document.getElementById("load7");
    var load8 = document.getElementById("load8");


    if (load1.style.display === "none") {
        load1.style.display = "flex";
        load2.style.display = "none";
        load3.style.display = "none";
        load4.style.display = "none";
        load5.style.display = "none";
        load6.style.display = "none";
        load7.style.display = "none";
        load8.style.display = "none";

    } else {
        load1.style.display = "flex";
        load2.style.display = "none";
        load3.style.display = "none";
        load4.style.display = "none";
        load5.style.display = "none";
        load6.style.display = "none";
        load7.style.display = "none";
        load8.style.display = "none";


    }
}


function function2() {
    var load1 = document.getElementById("load1");
    var load2 = document.getElementById("load2");
    var load3 = document.getElementById("load3");
    var load4 = document.getElementById("load4");
    var load5 = document.getElementById("load5");
    var load6 = document.getElementById("load6");
    var load7 = document.getElementById("load7");
    var load8 = document.getElementById("load8");


    if (load2.style.display === "none") {
        load2.style.display = "flex";
        load1.style.display = "none";
        load3.style.display = "none";
        load4.style.display = "none";
        load5.style.display = "none";
        load6.style.display = "none";
        load7.style.display = "none";
        load8.style.display = "none";

    } else {
        load1.style.display = "none";
        load2.style.display = "flex";
        load3.style.display = "none";
        load4.style.display = "none";
        load5.style.display = "none";
        load6.style.display = "none";
        load7.style.display = "none";
        load8.style.display = "none";
    }
}


function function3() {
    var load1 = document.getElementById("load1");
    var load2 = document.getElementById("load2");
    var load3 = document.getElementById("load3");
    var load4 = document.getElementById("load4");
    var load5 = document.getElementById("load5");
    var load6 = document.getElementById("load6");
    var load7 = document.getElementById("load7");
    var load8 = document.getElementById("load8");


    if (load3.style.display === "none") {
        load3.style.display = "flex";
        load1.style.display = "none";
        load2.style.display = "none";
        load4.style.display = "none";
        load5.style.display = "none";
        load6.style.display = "none";
        load7.style.display = "none";
        load8.style.display = "none";

    } else {
        load1.style.display = "none";
        load3.style.display = "flex";
        load2.style.display = "none";
        load4.style.display = "none";
        load5.style.display = "none";
        load6.style.display = "none";
        load7.style.display = "none";
        load8.style.display = "none";
    }
}

function function4() {
    var load1 = document.getElementById("load1");
    var load2 = document.getElementById("load2");
    var load3 = document.getElementById("load3");
    var load4 = document.getElementById("load4");
    var load5 = document.getElementById("load5");
    var load6 = document.getElementById("load6");
    var load7 = document.getElementById("load7");
    var load8 = document.getElementById("load8");


    if (load4.style.display === "none") {
        load4.style.display = "flex";
        load1.style.display = "none";
        load2.style.display = "none";
        load3.style.display = "none";
        load5.style.display = "none";
        load6.style.display = "none";
        load7.style.display = "none";
        load8.style.display = "none";

    } else {
        load1.style.display = "none";
        load4.style.display = "flex";
        load2.style.display = "none";
        load3.style.display = "none";
        load5.style.display = "none";
        load6.style.display = "none";
        load7.style.display = "none";
        load8.style.display = "none";
    }
}

function function5() {
    var load1 = document.getElementById("load1");
    var load2 = document.getElementById("load2");
    var load3 = document.getElementById("load3");
    var load4 = document.getElementById("load4");
    var load5 = document.getElementById("load5");
    var load6 = document.getElementById("load6");
    var load7 = document.getElementById("load7");
    var load8 = document.getElementById("load8");


    if (load5.style.display === "none") {
        load5.style.display = "flex";
        load1.style.display = "none";
        load2.style.display = "none";
        load3.style.display = "none";
        load4.style.display = "none";
        load6.style.display = "none";
        load7.style.display = "none";
        load8.style.display = "none";

    } else {
        load1.style.display = "none";
        load5.style.display = "flex";
        load2.style.display = "none";
        load3.style.display = "none";
        load4.style.display = "none";
        load6.style.display = "none";
        load7.style.display = "none";
        load8.style.display = "none";
    }
}


function function6() {
    var load1 = document.getElementById("load1");
    var load2 = document.getElementById("load2");
    var load3 = document.getElementById("load3");
    var load4 = document.getElementById("load4");
    var load5 = document.getElementById("load5");
    var load6 = document.getElementById("load6");
    var load7 = document.getElementById("load7");
    var load8 = document.getElementById("load8");


    if (load6.style.display === "none") {
        load6.style.display = "flex";
        load1.style.display = "none";
        load2.style.display = "none";
        load3.style.display = "none";
        load4.style.display = "none";
        load5.style.display = "none";
        load7.style.display = "none";
        load8.style.display = "none";

    } else {
        load1.style.display = "none";
        load6.style.display = "flex";
        load2.style.display = "none";
        load3.style.display = "none";
        load4.style.display = "none";
        load5.style.display = "none";
        load7.style.display = "none";
        load8.style.display = "none";
    }
}


function function7() {
    var load1 = document.getElementById("load1");
    var load2 = document.getElementById("load2");
    var load3 = document.getElementById("load3");
    var load4 = document.getElementById("load4");
    var load5 = document.getElementById("load5");
    var load6 = document.getElementById("load6");
    var load7 = document.getElementById("load7");
    var load8 = document.getElementById("load8");


    if (load7.style.display === "none") {
        load7.style.display = "flex";
        load1.style.display = "none";
        load2.style.display = "none";
        load3.style.display = "none";
        load4.style.display = "none";
        load5.style.display = "none";
        load6.style.display = "none";
        load8.style.display = "none";

    } else {
        load1.style.display = "none";
        load7.style.display = "flex";
        load2.style.display = "none";
        load3.style.display = "none";
        load4.style.display = "none";
        load5.style.display = "none";
        load6.style.display = "none";
        load8.style.display = "none";
    }
}

function function8() {
    var load1 = document.getElementById("load1");
    var load2 = document.getElementById("load2");
    var load3 = document.getElementById("load3");
    var load4 = document.getElementById("load4");
    var load5 = document.getElementById("load5");
    var load6 = document.getElementById("load6");
    var load7 = document.getElementById("load7");
    var load8 = document.getElementById("load8");


    if (load8.style.display === "none") {
        load8.style.display = "flex";
        load1.style.display = "none";
        load2.style.display = "none";
        load3.style.display = "none";
        load4.style.display = "none";
        load5.style.display = "none";
        load6.style.display = "none";
        load7.style.display = "none";

    } else {
        load1.style.display = "none";
        load8.style.display = "flex";
        load2.style.display = "none";
        load3.style.display = "none";
        load4.style.display = "none";
        load5.style.display = "none";
        load6.style.display = "none";
        load7.style.display = "none";
    }
}