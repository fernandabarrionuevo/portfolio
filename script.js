
const hamburgerBtn = document.querySelector('.nav-bar__hamburguer');
const hamburgerMenu = document.querySelector('.nav-bar__menu-hamburguer')

hamburgerBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    hamburgerMenu.classList.toggle('inactive');
}
/*
const user = {
    name:'Fernanda',
    profesion:'Full Stack Developer',
    description:'Soy una persona curiosa que le encanta aprender. Me gusta saber como funcionan las cosas',
    education:[
        {
            type:'nivel',
            year:'2013',
        }
    ],
    skills:[
        {
            skill:'HTML',
            porcentaje:'90'
        }
    ],
    proyects:[
        {
            name:'Título del Proyecto',
            description:'Descripción el proyecto',
            img:'src del proyecto'
        }
    ]

};

*/
