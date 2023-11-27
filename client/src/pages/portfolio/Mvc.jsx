import { useState } from 'react';
import mvcBlogImg from '../../assets/images/mvc-tech-blog-screenshot.png';
import ghLogo from '../../assets/logos/github-mark.svg';
import infoI from '../../assets/logos/info-solid.svg';
import { Card, CardImg, CardImgOverlay, CardTitle, CardLink, Col, Tooltip } from 'reactstrap';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

export default function MvcTechBlog() {
    // const [mvcTooltip, setMvcTooltip] = useState(false);
    // const toggleMvc = () => setMvcTooltip(!mvcTooltip);
    // const [mvcHover, setMvcHover] = useState(false);

    const [mvcModal, setMvcModal] = useState(false);
    const toggleMvc = () => setMvcModal(!mvcModal);
    const [mvcHover, setMvcHover] = useState(false);

    return (
        <>
            <Col>
                <Card inverse className='m-3 mt-5' onMouseEnter={() => setMvcHover(true)} onMouseLeave={() => setMvcHover(false)}>
                    <CardImg
                        alt="Screenshot of MVC Tech Blog site"
                        src={mvcBlogImg}
                        className='w-100 h-auto'
                    />
                    <div className='container p-3'>
                        {mvcHover ?
                            <CardImgOverlay className="row card-hover">
                                <CardLink href="https://howling-cat-95332-946fe14771a2.herokuapp.com/" className='row text-decoration-none'>
                                    <CardTitle tag="h5" className='text-black fw-bold fs-4 spectral pt-3 border border-black rounded'>
                                        MVC tech blog site
                                    </CardTitle>
                                </CardLink>
                                <div className='row'>
                                    <CardLink href="https://github.com/bdeutmeyer/mvc-tech-blog" className='col w-25'>
                                        <img src={ghLogo} alt="GitHub Icon" />
                                    </CardLink>
                                    {/* <a href="#" id="aboutMvcBlog" className='col w-25'>
                                        <img src={infoI} alt="Info" className='w-25' /></a> */}
                                    {/* <Tooltip
                                        autohide
                                        isOpen={mvcTooltip}
                                        target="aboutMvcBlog"
                                        toggle={toggleMvc}
                                    >
                                        The MVC Tech Blog is my very first full-stack application built from scratch! It utilizes Handlebars, Bootstrap CSS, JavaScript, Node.js, Express.js, Sequelize, and mySql.
                                    </Tooltip> */}
                                    <a href="#" id="aboutMvcBlog" className='col w-25' onClick={toggleMvc}>
                                        <img src={infoI} alt="Info" className='w-25' /></a>
                                    <Modal isOpen={mvcModal} toggle={toggleMvc}>
                                        <ModalHeader toggle={toggleMvc}>About the MVC Tech Blog site</ModalHeader>
                                        <ModalBody>
                                        The MVC Tech Blog is my very first full-stack application built from scratch! It utilizes Handlebars, Bootstrap CSS, JavaScript, Node.js, Express.js, Sequelize, and mySql.
                                        </ModalBody>
                                    </Modal>
                                </div>
                            </CardImgOverlay> : <CardImgOverlay id="aboutMvcBlog"></CardImgOverlay>}
                    </div>
                    {/* </Tooltip> */}

                </Card>
            </Col >
        </>
    )
}