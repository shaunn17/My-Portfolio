// import React from 'react';
// import '../styles.css';
// import '../css/about.css';


// const About = () => {
//   return (
    
//     <section className="about py-5 bg-light" id="about">
//       <div className="container">
//         <div className="row align-items-center">
//           <div className="col-md-4">
//             <img src="" alt="Shaun Figueiro" className="img-fluid rounded-circle shadow-lg" />
//           </div>
//           <div className="col-md-8">
//             <h2 className="display-4">About Me</h2>
//             <p className="lead">
//               I'm a Data Scientist with a passion for solving complex problems using data-driven solutions. My expertise lies in machine learning, web development, and data visualization.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import React from 'react';
import '../styles.css';
import '../css/about.css';
import shaunImage from '../images/sf.jpg';

const About = () => {
  return (

    <section className="about" id="about">
      <div className="about-container">
        <div className="about-image">
          <img src={shaunImage} alt="Shaun Figueiro"/>
        </div>
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            I'm a Data Scientist with a passion for solving complex problems using data-driven solutions. My expertise lies in machine learning, web development, and data visualization.
          </p>
        </div>
      </div>
    </section>  

    );
  };

export default About;

    // <section className="about py-5 bg-light border rounded-lg shadow-sm" id="about">
    //   <div className="container1">
    //     <div className="row align-items-center">
    //       <div className="col-md-4 text-center">
    //         <img src={shaunImage} alt="Shaun Figueiro" className="img-fluid rounded-circle mb-4 shadow-lg" />
    //       </div>
    //       <div className="col-md-8">
    //         <h2 className="display-4 fw-bold">About Me</h2>
    //         <p className="lead text-muted">
    //           I'm a Data Scientist with a passion for solving complex problems using data-driven solutions. My expertise lies in machine learning, web development, and data visualization.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    


{/* <section className="about" id="about">
      <div className="about-container">
        <div className="about-image">
          <img src= 'shaun.jpg' alt="Shaun Figueiro"/>
        </div>
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            I'm a Data Scientist with a passion for solving complex problems using data-driven solutions. My expertise lies in machine learning, web development, and data visualization.
          </p>
        </div>
      </div>
    </section> */}