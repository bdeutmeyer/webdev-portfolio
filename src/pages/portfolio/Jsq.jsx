import { useState } from 'react';
import jsQuizImg from '../../assets/images/js-quiz-screenshot.png';
import ghLogo from '../../assets/logos/github-mark.svg';
import infoI from '../../assets/logos/info-solid.svg';
import { Card, CardImg, CardImgOverlay, CardTitle, CardLink, Col, Tooltip } from 'reactstrap';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

export default function JavaScriptQuiz() {
    // const [jsqTooltip, setJsqTooltip] = useState(false);
    // const toggleJSQ = () => setJsqTooltip(!jsqTooltip);
    // const [jsqHover, setJsqHover] = useState(false);
    const [jsqModal, setJsqModal] = useState(false);
    const toggleJsq = () => setJsqModal(!jsqModal);
    const [jsqHover, setJsqHover] = useState(false);

    return (
        <Col>
            <Card inverse className='m-3 mt-5' onMouseEnter={() => setJsqHover(true)} onMouseLeave={() => setJsqHover(false)}>
                <CardImg
                    alt="Screenshot of JavaScript Quiz site"
                    src={jsQuizImg}
                    className='w-100 h-auto'
                />
                <div className='container p-3'>
                    {jsqHover ? (<CardImgOverlay className="row card-hover">
                        <CardLink href="https://bdeutmeyer.github.io/javascript-quiz//" className='row text-decoration-none'>
                            <CardTitle tag="h5" className='text-black fw-bold fs-4 spectral pt-3 border border-black rounded'>
                                JavaScript Quiz site
                            </CardTitle>
                        </CardLink>
                        <div className='row'>
                            <CardLink href="https://github.com/bdeutmeyer/javascript-quiz" className='col w-25'>
                                <img src={ghLogo} alt="GitHub Icon" />
                            </CardLink>
                            {/* <a href="#" id="aboutJSQ" className='col w-25'>
                    <img src={infoI} alt="Info" className='w-25' /></a>
                <Tooltip
                    autohide
                    isOpen={jsqTooltip}
                    target="aboutJSQ"
                    toggle={toggleJSQ}
                >
                    The JavaScript Quiz site was an early bootcamp project (week 2!). It utilizes bare bones HTML and CSS, and vanilla JavaScript to dynamically render elements to the page.
                </Tooltip> */}
                            <a href="#" id="aboutJSQ" className='col w-25' onClick={toggleJsq}>
                                <img src={infoI} alt="Info" className='w-25' /></a>
                            <Modal isOpen={jsqModal} toggle={toggleJsq}>
                                <ModalHeader toggle={toggleJsq}>About the JavaScript Quiz site</ModalHeader>
                                <ModalBody>
                                    The JavaScript Quiz site was an early bootcamp project (week 2!). It utilizes bare bones HTML and CSS, and vanilla JavaScript to dynamically render elements to the page.
                                </ModalBody>
                            </Modal>
                        </div>
                    </CardImgOverlay>) : (<CardImgOverlay id="aboutJSQ"></CardImgOverlay>)}
                </div>

            </Card>
        </Col>
    )
}