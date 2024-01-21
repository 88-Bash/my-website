let menu = document.getElementById('photo-menu');
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


    if (window1.style.display === "none" || window2.style.display === "none" || window3.style.display === "none") {
        window1.style.display = "flex";
        window2.style.display = "flex";
        window3.style.display = "flex";
        arrow1up.style.display = 'flex';
        arrow2up.style.display = 'flex';
        arrow3up.style.display = 'flex';
        arrow1down.style.display = 'flex';
        arrow2down.style.display = 'flex';
        arrow3down.style.display = 'flex';

        if (menu.classList.contains('active')) {
            toggleMenu();
        }

        return;
    }

    // Hide the other two windows and their respective arrows
    if (element === window1) {
        window2.style.display = "none";
        arrow2up.style.display = "none";
        arrow2down.style.display = "none";
        window3.style.display = "none";
        arrow3up.style.display = 'none';
        arrow3down.style.display = 'none';
        
    } else if (element === window2) {
        window1.style.display = "none";
        arrow1up.style.display = "none";
        arrow1down.style.display = "none";
        window3.style.display = "none";
        arrow3up.style.display = 'none';
        arrow3down.style.display = 'none';
    } else if (element === window3) {
        window1.style.display = "none";
        arrow1up.style.display = "none";
        arrow1down.style.display = "none";
        window2.style.display = "none";
        arrow2up.style.display = "none";
        arrow2down.style.display = "none";
    }

    // Check if the menu is active and toggle it if needed
    if (menu.classList.contains('active')) {
        toggleMenu();
    }
}

function stretchAndSlide(element) {

    //depends witch element has been clicked
    // it will trigger to set uo
}

function toggleMenu() {
    let menu = document.getElementById('photo-menu');
    let button = document.querySelector('#slider-button img');
    let grids = document.querySelectorAll('.grid'); // Select all elements with the class 'grid'
    let arrows = document.querySelectorAll('.navigation-arrow');

    menu.classList.toggle('active');
    button.classList.toggle('rotated');

    // Loop through all elements with the class 'grid' and toggle the 'blur' class
    grids.forEach(grid => {
        grid.classList.toggle('blur');
    });

    // Loop through all navigation arrow elements and toggle the 'blur' class
    arrows.forEach(arrow => {
        arrow.classList.toggle('blur');
    });
}

