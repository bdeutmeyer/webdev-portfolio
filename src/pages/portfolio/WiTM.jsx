import { useState } from 'react';
import witmImg from '../../assets/images/witm-screenshot.png';
import ghLogo from '../../assets/logos/github-mark.svg';
import infoI from '../../assets/logos/info-solid.svg';
import { Card, CardImg, CardImgOverlay, CardTitle, CardLink, Col, Tooltip } from 'reactstrap';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

export default function WhatsInThisMeal() {
    // const [witmTooltip, setWitmTooltip] = useState(false);
    // const toggleWITM = () => setWitmTooltip(!witmTooltip);
    // const [witmHover, setWitmHover] = useState(false);
    const [witmModal, setWitmModal] = useState(false);
    const toggleWitm = () => setWitmModal(!witmModal);
    const [witmHover, setWitmHover] = useState(false);

    return (
        <Col>
        <Card inverse className='m-3 mt-5' onMouseEnter={() => setWitmHover(true)} onMouseLeave={() => setWitmHover(false)}>
            <CardImg
                alt="Screenshot of What's in This Meal? site"
                src={witmImg}
                className='w-100 h-auto'
            />
            <div className='container p-3'>
            {witmHover ? (<CardImgOverlay className="row card-hover">
                <CardLink href="https://bdeutmeyer.github.io/nutrition-getter/" className='row text-decoration-none'>
                    <CardTitle tag="h5" className='text-black fw-bold fs-4 spectral pt-3 border border-black rounded'>
                        What's in This Meal? site
                    </CardTitle>
                </CardLink>
                <div className='row'>
                <CardLink href="https://github.com/bdeutmeyer/nutrition-getter" className='col w-25'>
                    <img src={ghLogo} alt="GitHub Icon" />
                </CardLink>
                {/* <a href="#" id="aboutWiTM" className='col w-25'>
                    <img src={infoI} alt="Info" className='w-25' /></a> */}
                {/* <Tooltip
                    autohide
                    isOpen={witmTooltip}
                    target="aboutWiTM"
                    toggle={toggleWITM}
                >
                    The "What's in this Meal?" site utilizes dynamically rendered elements and third-party APIs (Edamam). It is styled using Tailwind CSS. This was a group endeavor; my teammates were <a href="https://github.com/jwhit-commit">Joshua Whitaker</a>, <a href="https://github.com/lopezivan763">Ivan Lopez</a>, and <a href="https://github.com/maxblaul">Max Blaul</a>.
                </Tooltip> */}
                                <a href="#" id="aboutWiTM" className='col w-25'onClick={toggleWitm}>
                    <img src={infoI} alt="Info" className='w-25' /></a>
                    <Modal isOpen={witmModal} toggle={toggleWitm}>
                                <ModalHeader toggle={toggleWitm}>About the What's in This Meal? site</ModalHeader>
                                <ModalBody>
                                The "What's in this Meal?" site utilizes dynamically rendered elements and third-party APIs (Edamam). It is styled using Tailwind CSS. This was a group endeavor; my teammates were <a href="https://github.com/jwhit-commit">Joshua Whitaker</a>, <a href="https://github.com/lopezivan763">Ivan Lopez</a>, and <a href="https://github.com/maxblaul">Max Blaul</a>.
                                </ModalBody>
                            </Modal>
                </div>
            </CardImgOverlay>) : (<CardImgOverlay id="aboutWiTM"></CardImgOverlay>)}
            </div>

        </Card>
    </Col>
    )
}