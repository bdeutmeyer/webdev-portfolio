import resumePdf from '../assets/Beth_Deutmeyer_resume.pdf'

export default function Resume() {

   return (
      <>
         <h3 className='m-4 fw-bold'>Resume</h3>
         <hr />
         <p>Skills:     HTML   |   CSS   |   JavaScript   |   SQL   |   NoSQL   |   MERN (Mongo.db, Express.js, React, Node.js)</p>
         <hr />
         <br />
         <p>Download full resume:</p>
         <a href={resumePdf} className="fw-bold border border-dark px-4 py-2 text-decoration-none text-dark shadow">Download</a>
         <br /><br /><br />
         <hr />
         <br />
      </>
   );
};