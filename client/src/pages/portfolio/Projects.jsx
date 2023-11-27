// import { useState } from 'react';
// import ghLogo from '../../assets/logos/github-mark.svg';
// import infoI from '../../assets/logos/info-solid.svg';
// import { Card, CardImg, CardImgOverlay, CardTitle, CardLink, Col, Tooltip } from 'reactstrap';

// export default function Projects(props) {
//     const [projectTooltip, setProjectTooltip] = useState(false);
//     const toggleTooltip = () => setProjectTooltip(!projectTooltip);
//     const [projectHover, setProjectHover] = useState(false);

//     return (
//         <>
//         {props.portfolioProjects.map(detail => (
//             <Col key={detail.id}>
//             <Card inverse className='m-3' 
//             onMouseEnter={() => setProjectHover(true)} onMouseLeave={() => setProjectHover(false)}
//             >
//                 <CardImg
//                     alt={detail.imageAlt}
//                     src={detail.imagePath}
//                     className='w-100 h-auto'
//                 />
//                 <div className='container p-3'>
//                 {projectHover ? <CardImgOverlay className="row card-hover">
//                     <CardLink href={detail.liveLink} className='row text-decoration-none'>
//                         <CardTitle tag="h5" className='text-black fw-bold fs-4 spectral pt-3 border border-black rounded'>
//                             {detail.siteTitle}
//                         </CardTitle>
//                     </CardLink>
//                     <div className='row'>
//                     <CardLink href={detail.repoLink} className='col w-25'>
//                         <img src={ghLogo} alt="GitHub Icon" />
//                     </CardLink>
//                     <a href="#" id={detail.targetId} className='col w-25'>
//                         <img src={infoI} alt="Info" className='w-25' /></a>
//                     <Tooltip
//                         autohide
//                         isOpen={projectTooltip}
//                         target={detail.targetId}
//                         toggle={toggleTooltip}
//                     >
//                         {detail.tooltipText}
//                     </Tooltip>
//                     </div>
//                 </CardImgOverlay> : <CardImgOverlay id={detail.targetId}></CardImgOverlay>}
//                 </div>

//             </Card>
//         </Col>
//         ))}
//         </>
//     )
// }