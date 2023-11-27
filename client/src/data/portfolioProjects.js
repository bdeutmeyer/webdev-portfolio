import mvcBlogImg from '../assets/images/mvc-tech-blog-screenshot.png'
import goImg from '../assets/images/GAME-ON-screenshot.png'
import wdImg from '../assets/images/weather-dashboard-screenshot.png'
import witmImg from '../assets/images/WitM-screenshot.png'
import ntImg from '../assets/images/note-taker-screenshot.png'
import jsqImg from '../assets/images/js-quiz-screenshot.png'

const portfolioProjects = [
    {
        id: 1,
        imagePath: mvcBlogImg,
        imageAlt: 'Screenshot of MVC Tech Blog site',
        liveLink: 'https://howling-cat-95332-946fe14771a2.herokuapp.com/',
        siteTitle: 'MVC tech blog site',
        repoLink: 'https://github.com/bdeutmeyer/mvc-tech-blog',
        targetId: 'aboutMvcBlog',
        tooltipText: 'The MVC Tech Blog is my very first full-stack application built from scratch! It utilizes Handlebars, Bootstrap CSS, JavaScript, Node.js, Express.js, Sequelize, and mySql.',
        projectmodal: "mvcModal",
        setProjectModal: "setMvcModal",
        toggleModal: "toggleMvc",
        projectHover: "mvcHover",
        setProjectHover: "setMvcHover",
    },
    {
        id: 2,
        imagePath: goImg,
        imageAlt: 'Screenshot of GAME ON site',
        liveLink: 'https://grisly-coffin-11200-fb183baf5ee2.herokuapp.com/',
        siteTitle: 'GAME ON site',
        repoLink: 'https://github.com/vladesovc/GAME-ON',
        targetId: 'aboutGameOn',
        tooltipText: `GAME ON! serves as a portal to free online games. Users can see all available games, search by title, search by genre, and access direct links to each game for immediate play. If logged in, they can save games to their user dashboard. The site was a group endeavor; my teammates were <a href='https://github.com/vladesovc' className='hidden-link text-white'>Corey Vladesov</a>, <a href='https://github.com/lizfischstix' className='hidden-link text-white'>Liz Fischenich</a>, and <a href='https://github.com/taycannon' className='hidden-link text-white'>Taylor Cannon.</a>.`,
        projectmodal: "goModal",
        setProjectModal: "setGoModal",
        toggleModal: "toggleGo",
        projectHover: "goHover",
        setProjectHover: "setGoHover",
    },
    {
        id: 3,
        imagePath: wdImg,
        imageAlt: 'Screenshot of Weather Dashboard site',
        liveLink: 'https://bdeutmeyer.github.io/weather-dashboard/',
        siteTitle: 'Weather Dashboard site',
        repoLink: 'https://github.com/vladesovc/GAME-ON',
        targetId: 'aboutWD',
        tooltipText: "The Weather Dashboard site was my first project utilizing data fetched from a third-party API (OpenWeather API). It was also my first excursion into the exciting worlds of Day.js, Bootstrap CSS, and custom color palettes!",
        projectmodal: "wdModal",
        setProjectModal: "setWdModal",
        toggleModal: "toggleWd",
        projectHover: "wdHover",
        setProjectHover: "setWdHover",
    },
    {
        id: 4,
        imagePath: witmImg,
        imageAlt: 'Screenshot of What\'s in This Meal? site',
        liveLink: 'https://bdeutmeyer.github.io/nutrition-getter/',
        siteTitle: 'What\'s in This Meal? site',
        repoLink: 'https://github.com/bdeutmeyer/nutrition-getter',
        targetId: 'aboutWiTM',
        tooltipText: `The 'What's in this Meal?' site utilizes dynamically rendered elements and third-party APIs (Edamam). It is styled using Tailwind CSS. This was a group endeavor; my teammates were <a href='https://github.com/jwhit-commit'>Joshua Whitaker</a>, <a href='https://github.com/lopezivan763'>Ivan Lopez</a>, and <a href='https://github.com/maxblaul'>Max Blaul</a>.`,
        projectmodal: "witmModal",
        setProjectModal: "setWitmModal",
        toggleModal: "toggleWitm",
        projectHover: "witmHover",
        setProjectHover: "setWitmHover",
    },
    {
        id: 5,
        imagePath: ntImg,
        imageAlt: 'Screenshot of Note Taker site',
        liveLink: 'https://lit-ridge-70963-de8199e02790.herokuapp.com/',
        siteTitle: 'Note Taker site',
        repoLink: 'https://bdeutmeyer.github.io/javascript-quiz/',
        targetId: 'aboutNT',
        tooltipText: 'The Note Taker application was one of my first backend projects. The frontend code was provided by the bootcamp curriculum.',
        projectmodal: "ntModal",
        setProjectModal: "setNtModal",
        toggleModal: "toggleNt",
        projectHover: "ntHover",
        setProjectHover: "setNtHover",
    },
    {
        id: 6,
        imagePath: jsqImg,
        imageAlt: 'Screenshot of JavaScript Quiz site',
        liveLink: 'https://bdeutmeyer.github.io/javascript-quiz//',
        siteTitle: 'JavaScript Quiz site',
        repoLink: 'https://github.com/bdeutmeyer/javascript-quiz',
        targetId: 'aboutJSQ',
        tooltipText: 'The JavaScript Quiz site was an early bootcamp project (week 2!). It utilizes bare bones HTML and CSS, and vanilla JavaScript to dynamically render elements to the page.',
        projectmodal: "jsqModal",
        setProjectModal: "setJsqModal",
        toggleModal: "toggleJsq",
        projectHover: "jsqHover",
        setProjectHover: "setJsqHover",
    },
];

export default portfolioProjects