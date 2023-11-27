// for future additions: all card images are cropped to 18:11 aspect ratio
import { Container, Row } from 'reactstrap';
import Projects from './Projects'
import portfolioProjects from '../../data/portfolioProjects';

export default function Portfolio() {
    return (
        <>
            <Container fluid>
                <Row lg="3" md="2" sm="1" xs="1" className='d-flex justify-content-around p-2'>
                    <Projects portfolioProjects={portfolioProjects} />
                </Row>
            </Container>
        </>
    );
};