import { useState } from 'react';
import weatherDashboardImg from '../../assets/images/weather-dashboard-screenshot.png';
import ghLogo from '../../assets/logos/github-mark.svg';
import infoI from '../../assets/logos/info-solid.svg';
import { Card, CardImg, CardImgOverlay, CardTitle, CardLink, Col, Tooltip } from 'reactstrap';

export default function WeatherDashboard() {
    const [wdTooltip, setWdTooltip] = useState(false);
    const toggleWD = () => setWdTooltip(!wdTooltip);
    const [wdHover, setWdHover] = useState(false);

    return (
        <Col>
        <Card inverse className='m-3 mt-5' onMouseEnter={() => setWdHover(true)} onMouseLeave={() => setWdHover(false)}>
            <CardImg
                alt="Screenshot of Weather Dashboard site"
                src={weatherDashboardImg}
                className='w-100 h-auto'
            />
            {wdHover ? <CardImgOverlay className="card-hover p-2">
                <CardLink href="https://bdeutmeyer.github.io/weather-dashboard/">
                    <CardTitle tag="h5">
                        Weather Dashboard site
                    </CardTitle>
                </CardLink>
                <CardLink href="https://github.com/bdeutmeyer/weather-dashboard">
                    <img src={ghLogo} alt="GitHub Icon" />
                </CardLink>
                <a href="#" id="aboutWD">
                    <img src={infoI} alt="Info" className='w-25' /></a>
                <Tooltip
                    autohide
                    isOpen={wdTooltip}
                    target="aboutWD"
                    toggle={toggleWD}
                >
                    Hello world!
                </Tooltip>
            </CardImgOverlay> : <CardImgOverlay id="aboutWD"></CardImgOverlay>}
        </Card>
    </Col>
    )
}