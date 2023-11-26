// import { useState } from 'react';
// import ghLogo from '../../assets/logos/github-mark.svg';
// import infoI from '../../assets/logos/info-solid.svg';
// import { Card, CardImg, CardImgOverlay, CardTitle, CardLink, Col, Tooltip } from 'reactstrap';
// // import portfolioProjects from '../../data/portfolioProjects';

// export default function Projects(props) {
//     const [projectTooltip, setProjectTooltip] = useState(false);
//     const toggleTooltip = () => setProjectTooltip(!projectTooltip);
//     const [projectHover, setProjectHover] = useState(false);

//     return (
//         <>
//         {props.portfolioProjects.map(detail => (
//             <Col key={detail.id}>
//             <Card inverse className='m-3' onMouseEnter={() => setProjectHover(true)} onMouseLeave={() => setProjectHover(false)}>
//                 <CardImg
//                     alt={detail.imageAlt}
//                     src={detail.imagePath}
//                     className='w-100 h-auto'
//                 />
//                 {projectHover ? <CardImgOverlay className="bg-success-subtle p-2">
//                     <CardLink href={detail.liveLink}>
//                         <CardTitle tag="h5">
//                             {detail.siteTitle}
//                         </CardTitle>
//                     </CardLink>
//                     <CardLink href={detail.repoLink}>
//                         <img src={ghLogo} alt="GitHub Icon" />
//                     </CardLink>
//                     <a href="#" id={detail.targetId}>
//                         <img src={infoI} alt="Info" className='w-25' /></a>
//                     <Tooltip
//                         autohide
//                         isOpen={projectTooltip}
//                         target={detail.targetId}
//                         toggle={toggleTooltip}
//                     >
//                         {detail.tooltipText}
//                     </Tooltip>
//                 </CardImgOverlay> : <CardImgOverlay id={detail.targetId}></CardImgOverlay>}
//             </Card>
//         </Col>
//         ))}
//         </>
//     )
// }