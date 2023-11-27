// for future additions: all card images are cropped to 18:11 aspect ratio
import MvcTechBlog from './Mvc';
import GameOn from './Go';
import WeatherDashboard from './Wd';
import WhatsInThisMeal from './WiTM';
import NoteTaker from './Nt';
import JavaScriptQuiz from './Jsq';

import { Container, Row } from 'reactstrap';

export default function Portfolio() {

    return (
        <>
            <Container fluid>
                <Row lg="3" md="2" sm="1" xs="1" className='d-flex justify-content-around p-2 bg-dark pt-4 pb-4'>
                    <MvcTechBlog />
                    <GameOn />
                    <WeatherDashboard />
                    <WhatsInThisMeal />
                    <NoteTaker />
                    <JavaScriptQuiz />
                </Row>
            </Container>
        </>
    );
};