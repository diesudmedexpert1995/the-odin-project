const projectsSection = document.getElementById('projects-section')

   const projectDiv =  `<div class="project">
        <div class="screenshot">
            <p>screenshot of project</p>
        </div>
        <div class="project-info">
            <div class="title">
                <h3>Project name</h3>
                <i class="devicon-github-original colored"></i>
                <a href="" target="_blank"><img src="./icons/open-in-new.svg" alt="open in new tab"></a>
            </div>
            <p class="project-description">Short description of the project. Just a few sentences to describe it.</p>
        </div>
    </div>`
    for (let index = 0; index < 6; index++) {
        projectsSection.innerHTML += projectDiv       
    }


