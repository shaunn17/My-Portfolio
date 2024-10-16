
import React, { useEffect } from 'react';
import '../css/skills.css'; // Import the CSS file for styling

const Skills = () => {
  const skillsData = [
    { skill: 'Python', percentage: 95},
    { skill: 'SQL', percentage: 98},
    { skill: 'Java', percentage: 68},
    { skill: 'Power BI', percentage: 92},
    { skill: 'Tableau', percentage: 83},
    { skill: 'Machine Learning', percentage: 95},
    { skill: 'AWS', percentage: 85},
    { skill: 'Git', percentage: 95},
    { skill: 'Agile Methodologies', percentage: 90}
  ];

  useEffect(() => {
    const progressBars = document.querySelectorAll(".progress");

    progressBars.forEach(progress => {
      const value = progress.getAttribute('data-value');
      const left = progress.querySelector('.progress-left .progress-bar');
      const right = progress.querySelector('.progress-right .progress-bar');

      if (value > 0) {
        if (value <= 50) {
          right.style.transform = `rotate(${percentageToDegrees(value)}deg)`;
        } else {
          right.style.transform = 'rotate(180deg)';
          left.style.transform = `rotate(${percentageToDegrees(value - 50)}deg)`;
        }
      }
    });

    function percentageToDegrees(percentage) {
      return (percentage / 100) * 360;
    }
  }, []);

  return (
    <section className="skills-section" id="skills">
      <div className="container py-5">
        <h2 className="section-title text-center mb-5">My Skills</h2>
        <div className="row">
          {skillsData.map((skill, index) => (
            <div key={index} className="col-xl-2 col-lg-4 mb-4">
              <div className="bg-white rounded-lg p-5 shadow">
                <h2 className="h6 font-weight-bold text-center mb-4">{skill.skill}</h2>

                {/* Circular Progress Bar */}
                <div className="progress mx-auto" data-value={skill.percentage}>
                  <span className="progress-left">
                    <span className="progress-bar border-green"></span>
                  </span>
                  <span className="progress-right">
                    <span className="progress-bar border-green"></span>
                  </span>
                  <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                    <div className="h2 font-weight-bold">{skill.percentage}<sup className="small">%</sup></div>
                  </div>
                </div>
                {/* End Circular Progress Bar */}

                {/* <div className="row text-center mt-4">
                  <div className="col-6 border-right">
                    <div className="h4 font-weight-bold mb-0">{skill.week}%</div><span className="small text-gray">Last week</span>
                  </div>
                  <div className="col-6">
                    <div className="h4 font-weight-bold mb-0">{skill.month}%</div><span className="small text-gray">Last month</span>
                  </div>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;












// import React from 'react';
// import '../css/skills.css'; // Import the CSS file for styling

// const Skills = () => {
//   const skillsData = [
//     { skill: 'Python', percentage: 95, week: 28, month: 60 },
//     { skill: 'SQL', percentage: 98, week: 28, month: 60 },
//     { skill: 'Java', percentage: 68, week: 28, month: 60 },
//     { skill: 'Power BI', percentage: 92, week: 28, month: 60 },
//     { skill: 'Tableau', percentage: 83, week: 28, month: 60 },
//     { skill: 'Machine Learning', percentage: 95, week: 28, month: 60 },
//   ];

//   return (
//     // Ensure that you add an id to this section
//     <section className="skills-section" id="skills"> 
//       <div className="container">
//         <h2 className="section-title">My Skills</h2>
//         <div className="skills-grid">
//           {skillsData.map((skill, index) => (
//             <div key={index} className="skill-item">
//               <div className="skill-circle">
//                 <span className="skill-percentage">{skill.percentage}%</span>
//               </div>
//               <h3>{skill.skill}</h3>
//               <div className="progress-bar">
//                 <p>{skill.week}%<span>Last week</span></p>
//                 <p>{skill.month}%<span>Last month</span></p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;
