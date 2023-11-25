import React, { useState } from 'react';
import jsQuizImg from '../../assets/images/js-quiz-screenshot.png';
import ghLogo from '../../assets/logos/github-mark.svg';
import infoI from '../../assets/logos/info-solid.svg';
import { Card, CardImg, CardImgOverlay, CardTitle, CardLink, Col, Tooltip } from 'reactstrap';

export default function JavaScriptQuiz() {
    const [jsqTooltip, setJsqTooltip] = useState(false);
    const toggleJSQ = () => setJsqTooltip(!jsqTooltip);
    const [jsqHover, setJsqHover] = useState(false);

    return (
        <Col>
        <Card inverse className='m-2' onMouseEnter={() => setJsqHover(true)} onMouseLeave={() => setJsqHover(false)}>
            <CardImg
                alt="Screenshot of JavaScript Quiz site"
                src={jsQuizImg}
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
    </Col>
    )
}