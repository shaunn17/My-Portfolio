import React from 'react';
import '../styles.css';
import '../css/projects.css';

const Projects = () => {
  const projectList = [ 
    { 
      title: 'Text Classification with BERT', 
      description: 'Fine-tuned BERT model for sentiment analysis.',
      link: 'https://github.com/shaunn17/Text-Classification-with-BERT' // GitHub link for this project
    },
    { 
      title: 'Stock Price Prediction with LSTM', 
      description: 'Predicted Nvidia stock prices using LSTM networks.',
      link: 'https://github.com/shaunn17/Nvdia-Stock-Price-Prediction' // GitHub link for this project
    },
    { 
      title: "Decoding the Earth's palette", 
      description: 'Rock Classification with Deep Learning',
      link: 'https://github.com/shaunn17/Rock-Classification---Decoding-the-earths-palette' // GitHub link for this project
    },
    { 
      title: 'Streamlined Healthcare Management System', 
      description: 'A robust healthcare management system built using PostgreSQL',
      link: 'https://github.com/syam-m/Streamlined-Healthcare-Management-System' // GitHub link for this project
    },
    { 
      title: 'HRA Portal Dashboard', 
      description: 'A robust healthcare management system built using PostgreSQL',
      link: 'https://app.powerbi.com/groups/me/reports/d30c74e7-116b-4c20-bdb7-e6fadc4895eb/ReportSection?experience=power-bi' // GitHub link for this project
    }
  ];

  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projectList.map((project, index) => (
          <a key={index} href={project.link} className="project-card" target="_blank" rel="noopener noreferrer">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;


    
    // <section className="projects py-5 bg-success text-white" id="projects">
    //   <div className="container">
    //     <h2 className="text-center mb-4">Projects</h2>
    //     <div className="row">
    //       {projectList.map((project, index) => (
    //         <div className="col-md-4 mb-4" key={index}>
    //           <div className="card h-100">
    //             <div className="card-body">
    //               <h5 className="card-title">{project.title}</h5>
    //               <p className="card-text">{project.description}</p>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>

    




// import React, { useState } from 'react';
// import '../styles.css';

// const Project = ({ title, description }) => {
//   const [showDetails, setShowDetails] = useState(false);

//   return (
//     <div className="project-card" onClick={() => setShowDetails(!showDetails)}>
//       <h3>{title}</h3>
//       {showDetails ? <p>{description}</p> : <p>Click for more details...</p>}
//     </div>
//   );
// };

// const Projects = () => {
//   const projectList = [
//     { title: 'Text Classification with BERT', description: 'Fine-tuned BERT model for sentiment analysis.' },
//     { title: 'Stock Price Prediction with LSTM', description: 'Predicted Nvidia stock prices using LSTM networks.' },
//     { title: 'Rock Classification with Deep Learning', description: 'Classified rock types with Xception model.' }
//   ];

//   return (
//     <section className="projects">
//       <h2>My Projects</h2>
//       <div className="project-grid">
//         {projectList.map((project, index) => (
//           <Project key={index} title={project.title} description={project.description} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;
