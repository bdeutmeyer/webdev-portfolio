import mvcBlog from '../assets/images/mvc-tech-blog-screenshot.png'
import gameOn from '../assets/images/GAME-ON-screenshot.png'
import weatherDashboard from '../assets/images/weather-dashboard-screenshot.png'
import witm from '../assets/images/WitM-screenshot.png'
import noteTaker from '../assets/images/note-taker-screenshot.png'
import jsQuiz from '../assets/images/js-quiz-screenshot.png'

export default function Portfolio() {
    return (
        <>
        <a href="https://howling-cat-95332-946fe14771a2.herokuapp.com/">
            <img src={mvcBlog} alt="Screenshot of MVC Tech Blog site" />
        </a>
        <a href="https://grisly-coffin-11200-fb183baf5ee2.herokuapp.com/">
            <img src={gameOn} alt="Screenshot of GAME ON site" />
        </a>
        <a href="https://bdeutmeyer.github.io/weather-dashboard/">
            <img src={weatherDashboard} alt="Screenshot of Weather Dashboard site" />
        </a>
        <a href="https://bdeutmeyer.github.io/nutrition-getter/">
            <img src={witm} alt="Screenshot of What's in This Meal? site" />
        </a>
        <a href="https://lit-ridge-70963-de8199e02790.herokuapp.com/">
            <img src={noteTaker} alt="Screenshot of Note Taker site" />
        </a>
        <a href="https://bdeutmeyer.github.io/javascript-quiz/">
            <img src={jsQuiz} alt="Screenshot of JavaScript Quiz site" />
        </a>
        </>
           ); 
};