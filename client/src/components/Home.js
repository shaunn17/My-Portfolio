import React from 'react';
import '../styles.css';
import '../css/home.css';

const Home = () => {
  return (
    // <section className="home" id="home">
    //   <div className="home-content">
    //     <h1>Welcome to My Portfolio</h1>
    //     <p>Hi, I'm Shaun Figueiro, a passionate Data Scientist and Web Developer.</p>
    //     <button className="cta-button">Explore My Work</button>
    //   </div>
    // </section>

    <section className="home d-flex align-items-center justify-content-center vh-100 text-center text-white bg-dark" id="home">
      <div className="home-content container">
        <h1 className="display-3 mb-4">Welcome to My Portfolio</h1>
        <p className="lead mb-4">Hi, I'm Shaun Figueiro, a passionate Data Scientist and Web Developer.</p>
        <a href="#projects" > <button class="button-58" role="button">Explore My Work</button> </a> 

      </div>
    </section>
  
  );

};

export default Home;

