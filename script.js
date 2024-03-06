class ProjectWeb {
    constructor(name, type, status) {
        this.name = name
        this.type = type
        this.status = status
    }
}

let webProjects = [
    new ProjectWeb('My website', 'website', 'ongoing'),
    new ProjectWeb('Pronomic', 'Landing website', 'paused')
];

function projectDetails1(_projectName) {
    let details1 = 'Name: ' + _projectName.name + '<br>';
    details1 += 'Type: ' + _projectName.type + '<br>';
    details1 += 'Status: ' + _projectName.status;

    let elWeb1 = document.getElementById('webText');
    elWeb1.innerHTML = details1;
}

projectDetails1(webProjects[0]);

let currentWebProjectIndex = 0;

document.getElementById("arrow-up-web").addEventListener("click", function(){
    currentWebProjectIndex = (currentWebProjectIndex + 1) % webProjects.length;
    projectDetails1(webProjects[currentWebProjectIndex]);

    if (menu.classList.contains('active')) {
        toggleMenu();
    }

});

document.getElementById("arrow-down-web").addEventListener("click", function() {
    currentWebProjectIndex = (currentWebProjectIndex - 1 + webProjects.length) % webProjects.length;
    projectDetails1(webProjects[currentWebProjectIndex]);

    if (menu.classList.contains('active')) {
        toggleMenu();
    }
    
});


class ProjectCrypto {
    constructor(name, type, status) {
        this.name = name;
        this.type = type;
        this.status = status;
    }
}

class ProjectPersonal {
    constructor(name, type, status) {
        this.name = name;
        this.type = type;
        this.status = status;
    }
}

// ------------------------------------------------------------------------ //

// arrows appear and disapear when the pointer is on the element


let grid1 = document.getElementById("grid1");
let arrowUp1 = document.getElementById("arrow-up-web");
let arrowDown1 = document.getElementById("arrow-down-web");

let grid2 = document.getElementById("grid2");
let arrowUp2 = document.getElementById("arrow-up-crypto");
let arrowDown2 = document.getElementById("arrow-down-crypto");

let grid3 = document.getElementById("grid3");
let arrowUp3 = document.getElementById("arrow-up-misc");
let arrowDown3 = document.getElementById("arrow-down-misc");

// Initialize a letiable for the timeout
let hideTimeout1, hideTimeout2, hideTimeout3;

// Function to show arrows
function showArrows1() {
    arrowUp1.style.opacity = "1";
    arrowDown1.style.opacity = "1";
    clearTimeout(hideTimeout1);
}

function showArrows2() {
    arrowUp2.style.opacity = "1";
    arrowDown2.style.opacity = "1";
    clearTimeout(hideTimeout2);
}

function showArrows3() {
    arrowUp3.style.opacity = "1";
    arrowDown3.style.opacity = "1";
    clearTimeout(hideTimeout3);
}

// Function to hide arrows with delay
function hideArrowsWithDelay1() {
    // Clear existing timeout to reset the timer
    clearTimeout(hideTimeout1);
    // Set new timeout to hide arrows
    hideTimeout1 = setTimeout(function() {
        arrowUp1.style.opacity = "0";
        arrowDown1.style.opacity = "0";
    }, 1000); // Delay of 3 seconds
}

function hideArrowsWithDelay2() {
    // Clear existing timeout to reset the timer
    clearTimeout(hideTimeout2);
    // Set new timeout to hide arrows
    hideTimeout2 = setTimeout(function() {
        arrowUp2.style.opacity = "0";
        arrowDown2.style.opacity = "0";
    }, 1000); // Delay of 3 seconds
}

function hideArrowsWithDelay3() {
    // Clear existing timeout to reset the timer
    clearTimeout(hideTimeout3);
    // Set new timeout to hide arrows
    hideTimeout3 = setTimeout(function() {
        arrowUp3.style.opacity = "0";
        arrowDown3.style.opacity = "0";
    }, 1000); // Delay of 3 seconds
}

// Add event listeners for grid1
grid1.addEventListener("mouseenter", showArrows1);
grid1.addEventListener("mouseleave", hideArrowsWithDelay1);
grid2.addEventListener("mouseenter", showArrows2);
grid2.addEventListener("mouseleave", hideArrowsWithDelay2);
grid3.addEventListener("mouseenter", showArrows3);
grid3.addEventListener("mouseleave", hideArrowsWithDelay3);

// Add event listeners for the arrows
arrowUp1.addEventListener("mouseenter", showArrows1);
arrowUp1.addEventListener("mouseleave", hideArrowsWithDelay1);
arrowDown1.addEventListener("mouseenter", showArrows1);
arrowDown1.addEventListener("mouseleave", hideArrowsWithDelay1);

arrowUp2.addEventListener("mouseenter", showArrows2);
arrowUp2.addEventListener("mouseleave", hideArrowsWithDelay2);
arrowDown2.addEventListener("mouseenter", showArrows2);
arrowDown2.addEventListener("mouseleave", hideArrowsWithDelay2);

arrowUp3.addEventListener("mouseenter", showArrows3);
arrowUp3.addEventListener("mouseleave", hideArrowsWithDelay3);
arrowDown3.addEventListener("mouseenter", showArrows3);
arrowDown3.addEventListener("mouseleave", hideArrowsWithDelay3);

// ------------------------------------------------------------------------ //

function inflateWindow(element) {
    let window1 = document.getElementById('grid1');
    let window2 = document.getElementById('grid2');
    let window3 = document.getElementById('grid3');
    let arrow1up = document.getElementById('arrow-up-web');
    let arrow2up = document.getElementById('arrow-up-crypto');
    let arrow3up = document.getElementById('arrow-up-misc');
    let arrow1down = document.getElementById('arrow-down-web');
    let arrow2down = document.getElementById('arrow-down-crypto');
    let arrow3down = document.getElementById('arrow-down-misc');
    let windows = [window1, window2, window3];
    let arrows = [arrow1up, arrow2up, arrow3up, arrow1down, arrow2down, arrow3down];

    // Function to hide an element with fade
    
    function hideElement(el) {
        el.classList.add('fade-out');
        el.addEventListener('transitionend', function() {
            el.style.display = 'none';
        }, { once: true });
    }

    // Function to show an element with fade
    function showElement(el) {
        el.style.display = 'flex';
        // or 'block', depending on your layout
        requestAnimationFrame(() => {
            el.classList.remove('fade-out');
        });
    }

    if (window1.style.display === "none" || window2.style.display === "none" || window3.style.display === "none") {
        windows.forEach(showElement);
        arrows.forEach(showElement);

        if (menu.classList.contains('active')) {
            toggleMenu();
        }

        return;
    }

    // Hide the other two windows and their respective arrows
    if (element === window1) {
        hideElement(window2);
        hideElement(arrow2up);
        hideElement(arrow2down);
        hideElement(window3);
        hideElement(arrow3up);
        hideElement(arrow3down);
    } else if (element === window2) {
        hideElement(window1);
        hideElement(arrow1up);
        hideElement(arrow1down);
        hideElement(window3);
        hideElement(arrow3up);
        hideElement(arrow3down);
    } else if (element === window3) {
        hideElement(window1);
        hideElement(arrow1up);
        hideElement(arrow1down);
        hideElement(window2);
        hideElement(arrow2up);
        hideElement(arrow2down);
    }

    // Check if the menu is active and toggle it if needed
    if (menu.classList.contains('active')) {
        toggleMenu();
    }
}

function toggleMenu() {

    let menu = document.getElementById('photo-menu');
    let button = document.querySelector('#slider-button img');

    let mainContent = document.getElementById('main-content');
    let projects = document.getElementById('projects');
    let upperLip = document.getElementById('upper-lip');
    let lowerLip = document.getElementById('lower-lip');
    
    let aboutMe = document.getElementById('about-me-text');
    let contacts = document.getElementById('contact-elements');

    menu.classList.toggle('active');
    button.classList.toggle('rotated');
    
    projects.classList.toggle('blur');
    upperLip.classList.toggle('blur');
    lowerLip.classList.toggle('blur');
    
    if(aboutMe.style.display === 'flex') {

        mainContent.style.display = 'flex';
        menu.style.display = 'flex';
        aboutMe.style.display = 'none';
    }

    if(contacts.style.display === 'flex') {

       projects.style.display = 'flex';
        upperLip.style.display = 'flex';
        lowerLip.style.display = 'flex';

        menu.style.display = 'flex';
        contacts.style.display = 'none';

        upperLip.style.visibility = 'visible';
        lowerLip.style.visibility = 'visible';
    }
}

document.querySelector('#main-content').addEventListener('click', function() {

    let contacts = document.getElementById('contact-elements');

    if (contacts.style.display === 'flex') {

    } else if (document.getElementById('photo-menu').classList.contains('active')) {
        toggleMenu();
    }
});

document.querySelector('#about').addEventListener('click', function() {

   let mainContent = document.getElementById('main-content');
   let menu = document.getElementById('photo-menu');
   let aboutMe = document.getElementById('about-me-text');

   mainContent.style.display = 'none';
   menu.style.display = 'none';
   aboutMe.style.display = 'flex';
});

document.querySelector('#contacts').addEventListener('click', function() {

    let projects = document.getElementById('projects');
    let upperLip = document.getElementById('upper-lip');
    let lowerLip = document.getElementById('lower-lip');

    let menu = document.getElementById('photo-menu');
    let contacts = document.getElementById('contact-elements');
    
 
    projects.style.display = 'none';
    upperLip.style.visibility = 'hidden';
    lowerLip.style.visibility = 'hidden';

    menu.style.display = 'none';
    contacts.style.display = 'flex';
    
 });