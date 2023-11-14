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
