import ghLogo from '../../assets/logos/github-mark.svg';
import { Card, CardImg, CardText, CardImgOverlay, CardTitle, CardLink, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

//Project cards
export default function Projects(props) {
    return (
        <>
            {props.portfolioProjects.map(detail => (
                <Col key={detail.id}>
                    <Card inverse className='m-3 card-hover'>
                        <CardImg
                            alt={detail.imageAlt}
                            src={detail.imagePath}
                            className='w-100 h-auto screenshot'
                        />
                        <div className='container p-3'>
                            <CardImgOverlay className="overlay">
                                <div className='row'>
                                    <CardLink href={detail.liveLink} className='col text-decoration-none'>
                                        <CardTitle tag="h5" className='text-black fw-bold fs-6 spectral p-3 hidden-link'>
                                            {detail.siteTitle}
                                        </CardTitle>
                                    </CardLink>
                                    <CardLink href={detail.repoLink} className='col p-3'>
                                        <img src={ghLogo} alt="GitHub Icon" className='w-25 hidden-button' />
                                    </CardLink>
                                </div>
                                <div className='row'>
                                    <CardText className='text-dark h-75 card-text'>{detail.description}</CardText>
                                </div>
                            </CardImgOverlay>
                        </div>

                    </Card>
                </Col>
            ))}
        </>
    )
}