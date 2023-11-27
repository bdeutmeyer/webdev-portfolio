import { useState } from 'react';
import noteTakerImg from '../../assets/images/note-taker-screenshot.png';
import ghLogo from '../../assets/logos/github-mark.svg';
import infoI from '../../assets/logos/info-solid.svg';
import { Card, CardImg, CardImgOverlay, CardTitle, CardLink, Col, Tooltip } from 'reactstrap';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

export default function NoteTaker() {
    // const [ntTooltip, setNtTooltip] = useState(false);
    // const toggleNT = () => setNtTooltip(!ntTooltip);
    // const [ntHover, setNtHover] = useState(false);
    const [ntModal, setNtModal] = useState(false);
    const toggleNt = () => setNtModal(!ntModal);
    const [ntHover, setNtHover] = useState(false);

    return (
        <Col>
            <Card inverse className='m-3 mt-5' onMouseEnter={() => setNtHover(true)} onMouseLeave={() => setNtHover(false)}>
                <CardImg
                    alt="Screenshot of Note Taker site"
                    src={noteTakerImg}
                    className='w-100 h-auto'
                />
                <div className='container p-3'>
                    {ntHover ? (<CardImgOverlay className="row card-hover">
                        <CardLink href="https://lit-ridge-70963-de8199e02790.herokuapp.com/" className='row text-decoration-none'>
                            <CardTitle tag="h5" className='text-black fw-bold fs-4 spectral pt-3 border border-black rounded'>
                                Note Taker site
                            </CardTitle>
                        </CardLink>
                        <div className='row'>
                            <CardLink href="https://bdeutmeyer.github.io/javascript-quiz/" className='col w-25'>
                                <img src={ghLogo} alt="GitHub Icon" />
                            </CardLink>
                            {/* <a href="#" id="aboutNT" className='col w-25'>
                    <img src={infoI} alt="Info" className='w-25' /></a> */}
                            {/* <Tooltip
                    autohide
                    isOpen={ntTooltip}
                    target="aboutNT"
                    toggle={toggleNT}
                >
                    The Note Taker application was one of my first backend projects. The frontend code was provided by the bootcamp curriculum.
                </Tooltip> */}
                            <a href="#" id="aboutNT" className='col w-25' onClick={toggleNt}>
                                <img src={infoI} alt="Info" className='w-25' /></a>
                            <Modal isOpen={ntModal} toggle={toggleNt}>
                                <ModalHeader toggle={toggleNt}>About the Note Taker site</ModalHeader>
                                <ModalBody>
                                    The Note Taker application was one of my first backend projects. The frontend code was provided by the bootcamp curriculum.
                                </ModalBody>
                            </Modal>
                        </div>
                    </CardImgOverlay>) : (<CardImgOverlay id="aboutNT"></CardImgOverlay>)}
                </div>

            </Card>
        </Col>
    )
}