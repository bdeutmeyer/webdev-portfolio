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
            <div className='container p-3'>
            {wdHover ? <CardImgOverlay className="row card-hover">
                <CardLink href="https://bdeutmeyer.github.io/weather-dashboard/" className='row text-decoration-none'>
                    <CardTitle tag="h5" className='text-black fw-bold fs-4 spectral pt-3 border border-black rounded'>
                        Weather Dashboard site
                    </CardTitle>
                </CardLink>
                <div className='row'>
                <CardLink href="https://github.com/bdeutmeyer/weather-dashboard" className='col w-25'>
                    <img src={ghLogo} alt="GitHub Icon" />
                </CardLink>
                <a href="#" id="aboutWD" className='col w-25'>
                    <img src={infoI} alt="Info" className='w-25' /></a>
                <Tooltip
                    autohide
                    isOpen={wdTooltip}
                    target="aboutWD"
                    toggle={toggleWD}
                >
                    The Weather Dashboard site was my first project utilizing data fetched from a third-party API (OpenWeather API). It was also my first excursion into the exciting worlds of Day.js, Bootstrap CSS, and custom color palettes!
                </Tooltip>
                </div>

            </CardImgOverlay> : <CardImgOverlay id="aboutWD"></CardImgOverlay>}
            </div>
  
        </Card>
    </Col>
    )
}