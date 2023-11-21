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
});

document.getElementById("arrow-down-web").addEventListener("click", function() {
    currentWebProjectIndex = (currentWebProjectIndex - 1 + webProjects.length) % webProjects.length;
    projectDetails1(webProjects[currentWebProjectIndex]);
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
    // Remove the inflated class from any previously inflated element
    let previouslyInflated = document.querySelector('.inflated');
    if (previouslyInflated) {
        previouslyInflated.classList.remove('inflated');
    }

    // Add the inflated class to the clicked element
    element.classList.add('inflated');

    // Function to handle document click
    function handleDocumentClick(event) {
        // Check if the click is outside the inflated element
        if (element !== event.target && !element.contains(event.target)) {
            // Remove the inflated class
            element.classList.remove('inflated');
            // Remove this event listener since it's no longer needed
            document.removeEventListener('click', handleDocumentClick);
        }
    }

    // Add the event listener to the document
    setTimeout(() => document.addEventListener('click', handleDocumentClick), 0);
}