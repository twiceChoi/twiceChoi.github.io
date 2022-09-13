$(document).ready(() => {
    render_projects('Personal');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/mentors.jpg',
            link: 'https://github.com/abhn/Mporter',
            title: 'Crazy Acade',
            demo: false,
            technologies: ['Flask', 'Celery', 'Python'],
            description: "Flask web application for easy reporting updates to one's mentor. Multi-user support, easy to deploy and use.",
            categories: ['Personal']
        },
        {
            image: 'assets/images/mobile-landscape.jpg',
            link: 'https://github.com/abhn/Wall-E',
            title: 'It takes two(RPG)',
            demo: false,
            technologies: ['Semantic UI', 'Jekyll'],
            description: "A modern Jekyll theme with grid frontpage, beautiful typography, mobile responsive, made with Semantic UI.",
            categories: ['Personal']
        },
        {
            image: 'assets/images/collage.jpg',
            link: 'https://github.com/abhn/Marvel',
            title: 'Perspective',
            demo: false,
            technologies: ['Android', 'OpenCV'],
            description: "Attendance marking tool that uses face recognition for marking attendance and firebase for tracking and analytics.",
            categories: ['Team']
        },
        {
            image: 'assets/images/mpw.jpg',
            link: 'https://github.com/abhn/mpw',
            title: 'Kirby Discovery',
            demo: false,
            technologies: ['Semantic UI', 'CSS3'],
            description: "Master Password is an ingenious password solution that makes your passwords truly impossible to lose.",
            categories: ['Team']
        },
    ]

    let projects = [];
    projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    projects_area.hide().html(projects).fadeIn();

}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}