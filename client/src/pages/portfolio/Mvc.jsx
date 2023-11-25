import { useState } from 'react';
import mvcBlogImg from '../../assets/images/mvc-tech-blog-screenshot.png';
import ghLogo from '../../assets/logos/github-mark.svg';
import infoI from '../../assets/logos/info-solid.svg';
import { Card, CardImg, CardImgOverlay, CardTitle, CardLink, Col, Tooltip } from 'reactstrap';

export default function MvcTechBlog() {
    const [mvcTooltip, setMvcTooltip] = useState(false);
    const toggleMvc = () => setMvcTooltip(!mvcTooltip);
    const [mvcHover, setMvcHover] = useState(false);

    return (
        <>
            <Col>
                <Card inverse className='m-3' onMouseEnter={() => setMvcHover(true)} onMouseLeave={() => setMvcHover(false)}>
                    <CardImg
                        alt="Screenshot of MVC Tech Blog site"
                        src={mvcBlogImg}
                        className='w-100 h-auto'
                    />
                    {/* <Tooltip autohide isOpen={mvcHover} target="mvc" toggle={toggleMvcHover}> */}
                    {mvcHover ? <CardImgOverlay className="bg-success-subtle p-2">
                        <CardLink href="https://howling-cat-95332-946fe14771a2.herokuapp.com/">
                            <CardTitle tag="h5">
                                MVC tech blog site
                            </CardTitle>
                        </CardLink>
                        <CardLink href="https://github.com/bdeutmeyer/mvc-tech-blog">
                            <img src={ghLogo} alt="GitHub Icon" />
                        </CardLink>
                        <a href="#" id="aboutMvcBlog">
                            <img src={infoI} alt="Info" className='w-25' /></a>
                        <Tooltip
                            autohide
                            isOpen={mvcTooltip}
                            target="aboutMvcBlog"
                            toggle={toggleMvc}
                        >
                            Hello world!
                        </Tooltip>
                    </CardImgOverlay> : <CardImgOverlay id="aboutMvcBlog"></CardImgOverlay>}
                    {/* </Tooltip> */}

                </Card>
            </Col>
        </>
    )
}