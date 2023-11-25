// import { } from 'reactstrap'
import { Link } from 'react-router-dom';
import NavBar from './NavBar'

function Navigation() {
    return (
        <NavBar
            links={[
                <Link key={1} className="nav-link text-light" to="/">
                    About Me
                </Link>,
                <Link key={2} className="nav-link text-light" to="/portfolio">
                    Portfolio
                </Link>,
                <Link key={3} className="nav-link text-light" to="/resume">
                    Resume
                </Link>,
                <Link key={4} className="nav-link text-light" to="/contact">
                    Contact
                </Link>,
            ]}
        />
    );
}

export default Navigation;