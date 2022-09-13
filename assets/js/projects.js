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
            link: 'https://happy-runner.tistory.com/192',
            title: 'Crazy Acade',
            demo: false,
            technologies: ['C++', 'WinAPI'],
            description: "WinAPI를 이용한 CrazyArcade 모작[2D], 제작기간 2주",
            categories: ['Personal']
        },
        {
            image: 'assets/images/mobile-landscape.jpg',
            link: 'https://happy-runner.tistory.com/193',
            title: 'It takes two(RPG)',
            demo: false,
            technologies: ['C++', 'DirectX','MFC'],
            description: "DirectX를 이용한 It takes two(RPG) 모작[3D], 제작기간 3달",
            categories: ['Personal']
        },
        {
            image: 'assets/images/collage.jpg',
            link: 'https://happy-runner.tistory.com/194',
            title: 'Perspective',
            demo: false,
            technologies: ['C++', 'DirectX','MFC'],
            description: "DirectX[SoftRendering]를 이용한 Perspective 모작[3D], 제작기간 3주",
            categories: ['Team']
        },
        {
            image: 'assets/images/mpw.jpg',
            link: 'https://happy-runner.tistory.com/195',
            title: 'Kirby Discovery',
            demo: false,
            technologies: ['C++', 'DirectX'],
            description: "DirectX를 이용한 Kirby Discovery 모작(3D)",
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