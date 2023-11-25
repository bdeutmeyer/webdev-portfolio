import React, { useState } from 'react';
import gameOnImg from '../../assets/images/GAME-ON-screenshot.png';
import ghLogo from '../../assets/logos/github-mark.svg';
import infoI from '../../assets/logos/info-solid.svg';
import { Card, CardImg, CardImgOverlay, CardTitle, CardLink, Col, Tooltip } from 'reactstrap';

export default function GameOn() {
    const [gameOnTooltip, setGameOnTooltip] = useState(false);
    const toggleGO = () => setGameOnTooltip(!gameOnTooltip);
    const [goHover, setGoHover] = useState(false);

    return (
        <Col>
            <Card inverse className='m-2' onMouseEnter={() => setGoHover(true)} onMouseLeave={() => setGoHover(false)}>
                <CardImg
                    alt="Screenshot of GAME ON site"
                    src={gameOnImg}
                    className='w-100 h-auto'
                />
                {goHover ? <CardImgOverlay className="bg-success-subtle p-2">
                    <CardLink href="https://grisly-coffin-11200-fb183baf5ee2.herokuapp.com/">
                        <CardTitle tag="h5">
                            GAME ON site
                        </CardTitle>
                    </CardLink>
                    <CardLink href="https://github.com/vladesovc/GAME-ON">
                        <img src={ghLogo} alt="GitHub Icon" />
                    </CardLink>
                    <a href="#" id="aboutGameOn">
                        <img src={infoI} alt="Info" className='w-25' /></a>
                    <Tooltip
                        autohide
                        isOpen={gameOnTooltip}
                        target="aboutGameOn"
                        toggle={toggleGO}
                    >
                        Hello world!
                    </Tooltip>

                </CardImgOverlay> : <CardImgOverlay id="aboutGameOn"></CardImgOverlay>}
            </Card>
        </Col>
    )
}