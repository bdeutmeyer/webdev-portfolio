import { useState } from 'react';
import witmImg from '../../assets/images/witm-screenshot.png';
import ghLogo from '../../assets/logos/github-mark.svg';
import infoI from '../../assets/logos/info-solid.svg';
import { Card, CardImg, CardImgOverlay, CardTitle, CardLink, Col, Tooltip } from 'reactstrap';

export default function WhatsInThisMeal() {
    const [witmTooltip, setWitmTooltip] = useState(false);
    const toggleWITM = () => setWitmTooltip(!witmTooltip);
    const [witmHover, setWitmHover] = useState(false);

    return (
        <Col>
        <Card inverse className='m-3' onMouseEnter={() => setWitmHover(true)} onMouseLeave={() => setWitmHover(false)}>
            <CardImg
                alt="Screenshot of What's in This Meal? site"
                src={witmImg}
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
    </Col>
    )
}