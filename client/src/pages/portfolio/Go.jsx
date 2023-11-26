import { useState } from 'react';
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
            <Card inverse className='m-3 mt-5' onMouseEnter={() => setGoHover(true)} onMouseLeave={() => setGoHover(false)}>
                <CardImg
                    alt="Screenshot of GAME ON site"
                    src={gameOnImg}
                    className='w-100 h-auto'
                />
                {goHover ? <CardImgOverlay className="card-hover p-2">
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
                        data-bs-delay='{"show": 0, "hide":3000}'
                    >
                        GAME ON! serves as a portal to free online games. Users can see all available games, search by title, search by genre, and access direct links to each game for immediate play. If logged in, they can save games to their user dashboard. The site was a group endeavor; Beth's teammates were <a href="https://github.com/vladesovc" className='hidden-link'>Corey Vladesov</a>, <a href="https://github.com/lizfischstix" className='hidden-link'>Liz Fischenich</a>, and <a href="https://github.com/taycannon" className='hidden-link'>Taylor Cannon.</a>.
                    </Tooltip>

                </CardImgOverlay> : <CardImgOverlay id="aboutGameOn"></CardImgOverlay>}
            </Card>
        </Col>
    )
}