import { Link } from 'react-router-dom'
import headshot from '../assets/images/Beth.jpg'

export default function About() {
    return (
        <>
            <h3 className='m-2 fw-bold'>About Me</h3>
            <br />
            <div>
            <img src={headshot} alt="Beth Deutmeyer headshot" className="float-start me-3" width="15%"/>
            <p className="text-start">I am a newly minted coder with imminent certification in full stack web development from the Northwestern University Coding Boot Camp. I have skills in a whole host of web development technologies and coding languages (see my <Link className='text-decoration-none text-black hidden-link' to="/resume">resume page</Link> for more details!), and I am eager to continue learning more through the boot camp and beyond.</p>
            <p className="text-start">I have spent over 15 years building a successful career as a voice teacher. I maintain a private studio at home, and have also taught at a few area high schools, colleges, and universities. I hope that my career journey will allow me to marry up my love of teaching with my new tech chops. Working to help people learn new and better ways to achieve their goals through technology sounds incredibly rewarding. No matter what else the future holds for me, I intend to keep building cool sites, solving problems, untangling puzzles, and growing in my knowledge!</p>     
            </div>
       
        </>
    );
};