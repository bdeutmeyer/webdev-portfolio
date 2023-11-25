import React, { useState } from 'react';
import mvcBlog from '../assets/images/mvc-tech-blog-screenshot.png';
import gameOn from '../assets/images/GAME-ON-screenshot.png';
import weatherDashboard from '../assets/images/weather-dashboard-screenshot.png';
import witm from '../assets/images/witm-screenshot.png';
import noteTaker from '../assets/images/note-taker-screenshot.png';
import jsQuiz from '../assets/images/js-quiz-screenshot.png';
import ghLogo from '../assets/logos/github-mark.svg';
import infoI from '../assets/logos/info-solid.svg';
import { Card, CardImg, CardImgOverlay, CardTitle, CardLink, Container, Col, Row, Tooltip } from 'reactstrap';
// for future: all card images are cropped to 18:11 aspect ratio


export default function Portfolio() {
    const [mvcTooltip, setMvcTooltip] = useState(false);
    const toggleMvc = () => setMvcTooltip(!mvcTooltip);
    const [gameOnTooltip, setGameOnTooltip] = useState(false);
    const toggleGO = () => setGameOnTooltip(!gameOnTooltip);
    const [wdTooltip, setWdTooltip] = useState(false);
    const toggleWD = () => setWdTooltip(!wdTooltip);
    const [witmTooltip, setWitmTooltip] = useState(false);
    const toggleWITM = () => setWitmTooltip(!witmTooltip);
    const [ntTooltip, setNtTooltip] = useState(false);
    const toggleNT = () => setNtTooltip(!ntTooltip);
    const [jsqTooltip, setJsqTooltip] = useState(false);
    const toggleJSQ = () => setJsqTooltip(!jsqTooltip);

    return (
        <>

            <Container fluid>
                <Row md="3" sm="1" className='d-flex justify-content-around p-2'>
                    {/* MVC Tech Blog */}
                    <Col>
                        <Card inverse className='m-2'>
                            <CardImg
                                alt="Screenshot of MVC Tech Blog site"
                                src={mvcBlog}
                                className='w-100 h-auto'
                            />
                            <CardImgOverlay>
                                <CardLink href="https://howling-cat-95332-946fe14771a2.herokuapp.com/">
                                    <CardTitle tag="h5">
                                        MVC tech blog site
                                    </CardTitle>
                                </CardLink>
                                <CardLink href="https://github.com/bdeutmeyer/mvc-tech-blog">
                                    <img src={ghLogo} alt="GitHub Icon" />
                                </CardLink>
                                <a href="#" id="aboutMvcBlog">
                                    <img src={infoI} alt="Info" className='w-25'/></a>
                                <Tooltip
                                    autohide
                                    isOpen={mvcTooltip}
                                    target="aboutMvcBlog"
                                    toggle={toggleMvc}
                                >
                                    Hello world!
                                </Tooltip>
                            </CardImgOverlay>
                        </Card>
                    </Col>

                    {/* GAME ON */}
                    <Col>
                        <Card inverse className='m-2'>
                            <CardImg
                                alt="Screenshot of GAME ON site"
                                src={gameOn}
                                className='w-100 h-auto'
                            />
                            <CardImgOverlay>
                                <CardLink href="https://grisly-coffin-11200-fb183baf5ee2.herokuapp.com/">
                                    <CardTitle tag="h5">
                                        GAME ON site
                                    </CardTitle>
                                </CardLink>
                                <CardLink href="https://github.com/vladesovc/GAME-ON">
                                    <img src={ghLogo} alt="GitHub Icon" />
                                </CardLink>
                                <a href="#" id="aboutGameOn">
                                    <img src={infoI} alt="Info" className='w-25'/></a>
                                <Tooltip
                                    autohide
                                    isOpen={gameOnTooltip}
                                    target="aboutGameOn"
                                    toggle={toggleGO}
                                >
                                    Hello world!
                                </Tooltip>
                            </CardImgOverlay>
                        </Card>
                    </Col>

                    {/* Weather Dashboard */}
                    <Col>
                        <Card inverse className='m-2'>
                            <CardImg
                                alt="Screenshot of Weather Dashboard site"
                                src={weatherDashboard}
                                className='w-100 h-auto'
                            />
                            <CardImgOverlay>
                                <CardLink href="https://bdeutmeyer.github.io/weather-dashboard/">
                                    <CardTitle tag="h5">
                                        Weather Dashboard site
                                    </CardTitle>
                                </CardLink>
                                <CardLink href="https://github.com/bdeutmeyer/weather-dashboard">
                                    <img src={ghLogo} alt="GitHub Icon" />
                                </CardLink>
                                <a href="#" id="aboutWD">
                                    <img src={infoI} alt="Info" className='w-25'/></a>
                                <Tooltip
                                    autohide
                                    isOpen={wdTooltip}
                                    target="aboutWD"
                                    toggle={toggleWD}
                                >
                                    Hello world!
                                </Tooltip>
                            </CardImgOverlay>
                        </Card>
                    </Col>

                    {/* What's in This Meal? */}
                    <Col>
                        <Card inverse className='m-2'>
                            <CardImg
                                alt="Screenshot of What's in This Meal? site"
                                src={witm}
                                className='w-100 h-auto'
                            />
                            <CardImgOverlay>
                                <CardLink href="https://bdeutmeyer.github.io/nutrition-getter/">
                                    <CardTitle tag="h5">
                                        What's in This Meal? site
                                    </CardTitle>
                                </CardLink>
                                <CardLink href="https://github.com/bdeutmeyer/nutrition-getter">
                                    <img src={ghLogo} alt="GitHub Icon" />
                                </CardLink>
                                <a href="#" id="aboutWiTM">
                                    <img src={infoI} alt="Info" className='w-25'/></a>
                                <Tooltip
                                    autohide
                                    isOpen={witmTooltip}
                                    target="aboutWiTM"
                                    toggle={toggleWITM}
                                >
                                    Hello world!
                                </Tooltip>
                            </CardImgOverlay>
                        </Card>
                    </Col>

                    {/* Note Taker */}
                    <Col>
                        <Card inverse className='m-2'>
                            <CardImg
                                alt="Screenshot of Note Taker site"
                                src={noteTaker}
                                className='w-100 h-auto'
                            />
                            <CardImgOverlay>
                                <CardLink href="https://lit-ridge-70963-de8199e02790.herokuapp.com/">
                                    <CardTitle tag="h5">
                                        Note Taker site
                                    </CardTitle>
                                </CardLink>
                                <CardLink href="https://bdeutmeyer.github.io/javascript-quiz/">
                                    <img src={ghLogo} alt="GitHub Icon" />
                                </CardLink>
                                <a href="#" id="aboutNT">
                                    <img src={infoI} alt="Info" className='w-25'/></a>
                                <Tooltip
                                    autohide
                                    isOpen={ntTooltip}
                                    target="aboutNT"
                                    toggle={toggleNT}
                                >
                                    Hello world!
                                </Tooltip>
                            </CardImgOverlay>
                        </Card>
                    </Col>

                    {/* JavaScript Quiz */}
                    <Col>
                        <Card inverse className='m-2'>
                            <CardImg
                                alt="Screenshot of JavaScript Quiz site"
                                src={jsQuiz}
                                className='w-100 h-auto'
                            />
                            <CardImgOverlay>
                                <CardLink href="https://bdeutmeyer.github.io/javascript-quiz//">
                                    <CardTitle tag="h5">
                                        Note Taker site
                                    </CardTitle>
                                </CardLink>
                                <CardLink href="https://github.com/bdeutmeyer/javascript-quiz">
                                    <img src={ghLogo} alt="GitHub Icon" />
                                </CardLink>
                                <a href="#" id="aboutJSQ">
                                    <img src={infoI} alt="Info" className='w-25'/></a>
                                <Tooltip
                                    autohide
                                    isOpen={jsqTooltip}
                                    target="aboutJSQ"
                                    toggle={toggleJSQ}
                                >
                                    Hello world!
                                </Tooltip>
                            </CardImgOverlay>
                        </Card>
                    </Col>

                </Row>
            </Container>




        </>
    );
};