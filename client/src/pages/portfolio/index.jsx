// for future additions: all card images are cropped to 18:11 aspect ratio

import React, { useState } from 'react';
import MvcTechBlog from './Mvc';
import GameOn from './Go';
import WeatherDashboard from './Wd';

// import witm from '../assets/images/witm-screenshot.png';
// import noteTaker from '../assets/images/note-taker-screenshot.png';
// import jsQuiz from '../assets/images/js-quiz-screenshot.png';
// import ghLogo from '../assets/logos/github-mark.svg';
// import infoI from '../assets/logos/info-solid.svg';
import { Card, CardImg, CardImgOverlay, CardTitle, CardLink, Container, Col, Row, Tooltip } from 'reactstrap';

export default function Portfolio() {

    const [witmTooltip, setWitmTooltip] = useState(false);
    const toggleWITM = () => setWitmTooltip(!witmTooltip);
    const [ntTooltip, setNtTooltip] = useState(false);
    const toggleNT = () => setNtTooltip(!ntTooltip);
    const [jsqTooltip, setJsqTooltip] = useState(false);
    const toggleJSQ = () => setJsqTooltip(!jsqTooltip);

    const [witmHover, setWitmHover] = useState(false);
    const [ntHover, setNtHover] = useState(false);
    const [jsqHover, setJsqHover] = useState(false);

    return (
        <>
            <Container fluid>
                <Row lg="3" md="2" sm="1" xs="1" className='d-flex justify-content-around p-2'>
<MvcTechBlog />
<GameOn />
<WeatherDashboard />

                    {/* What's in This Meal? */}
                    {/* <Col>
                        <Card inverse className='m-2' onMouseEnter={() => setWitmHover(true)} onMouseLeave={() => setWitmHover(false)}>
                            <CardImg
                                alt="Screenshot of What's in This Meal? site"
                                src={witm}
                                className='w-100 h-auto'
                            />
                            {witmHover ? <CardImgOverlay className="bg-success-subtle p-2">
                                <CardLink href="https://bdeutmeyer.github.io/nutrition-getter/">
                                    <CardTitle tag="h5">
                                        What's in This Meal? site
                                    </CardTitle>
                                </CardLink>
                                <CardLink href="https://github.com/bdeutmeyer/nutrition-getter">
                                    <img src={ghLogo} alt="GitHub Icon" />
                                </CardLink>
                                <a href="#" id="aboutWiTM">
                                    <img src={infoI} alt="Info" className='w-25' /></a>
                                <Tooltip
                                    autohide
                                    isOpen={witmTooltip}
                                    target="aboutWiTM"
                                    toggle={toggleWITM}
                                >
                                    Hello world!
                                </Tooltip>
                            </CardImgOverlay> : <CardImgOverlay id="aboutWiTM"></CardImgOverlay>}
                        </Card>
                    </Col> */}

                    {/* Note Taker */}
                    {/* <Col>
                        <Card inverse className='m-2' onMouseEnter={() => setNtHover(true)} onMouseLeave={() => setNtHover(false)}>
                            <CardImg
                                alt="Screenshot of Note Taker site"
                                src={noteTaker}
                                className='w-100 h-auto'
                            />
                            {ntHover ? <CardImgOverlay className="bg-success-subtle p-2">
                                <CardLink href="https://lit-ridge-70963-de8199e02790.herokuapp.com/">
                                    <CardTitle tag="h5">
                                        Note Taker site
                                    </CardTitle>
                                </CardLink>
                                <CardLink href="https://bdeutmeyer.github.io/javascript-quiz/">
                                    <img src={ghLogo} alt="GitHub Icon" />
                                </CardLink>
                                <a href="#" id="aboutNT">
                                    <img src={infoI} alt="Info" className='w-25' /></a>
                                <Tooltip
                                    autohide
                                    isOpen={ntTooltip}
                                    target="aboutNT"
                                    toggle={toggleNT}
                                >
                                    Hello world!
                                </Tooltip>
                            </CardImgOverlay> : <CardImgOverlay id="aboutNT"></CardImgOverlay>}
                        </Card>
                    </Col> */}

                    {/* JavaScript Quiz */}
                    {/* <Col>
                        <Card inverse className='m-2' onMouseEnter={() => setJsqHover(true)} onMouseLeave={() => setJsqHover(false)}>
                            <CardImg
                                alt="Screenshot of JavaScript Quiz site"
                                src={jsQuiz}
                                className='w-100 h-auto'
                            />
                            {jsqHover ? <CardImgOverlay className="bg-success-subtle p-2">
                                <CardLink href="https://bdeutmeyer.github.io/javascript-quiz//">
                                    <CardTitle tag="h5">
                                        Note Taker site
                                    </CardTitle>
                                </CardLink>
                                <CardLink href="https://github.com/bdeutmeyer/javascript-quiz">
                                    <img src={ghLogo} alt="GitHub Icon" />
                                </CardLink>
                                <a href="#" id="aboutJSQ">
                                    <img src={infoI} alt="Info" className='w-25' /></a>
                                <Tooltip
                                    autohide
                                    isOpen={jsqTooltip}
                                    target="aboutJSQ"
                                    toggle={toggleJSQ}
                                >
                                    Hello world!
                                </Tooltip>
                            </CardImgOverlay> : <CardImgOverlay id="aboutJSQ"></CardImgOverlay>}
                        </Card>
                    </Col> */}

                </Row>
            </Container>
        </>
    );
};