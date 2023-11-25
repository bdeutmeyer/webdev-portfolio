import React, { useState } from 'react';
import noteTakerImg from '../../assets/images/note-taker-screenshot.png';
import ghLogo from '../../assets/logos/github-mark.svg';
import infoI from '../../assets/logos/info-solid.svg';
import { Card, CardImg, CardImgOverlay, CardTitle, CardLink, Col, Tooltip } from 'reactstrap';

export default function NoteTaker() {
    const [ntTooltip, setNtTooltip] = useState(false);
    const toggleNT = () => setNtTooltip(!ntTooltip);
    const [ntHover, setNtHover] = useState(false);

    return (
        <Col>
        <Card inverse className='m-2' onMouseEnter={() => setNtHover(true)} onMouseLeave={() => setNtHover(false)}>
            <CardImg
                alt="Screenshot of Note Taker site"
                src={noteTakerImg}
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
    </Col>
    )
}