import React from 'react';
import IMG1 from '../../assets/Gemini.png';
import IMG2 from '../../assets/LandingPage.png';
import IMG3 from '../../assets/todo.png';
import IMG4 from '../../assets/Amazon.png';
import IMG5 from '../../assets/news.png';
import IMG6 from '../../assets/math.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Gemini Functional Clone',
      img: IMG1,
      description:'A Gemini AI clone using React.js and Gemini API, offering real-time chat, seamless AI responses, and a sleek UI. ',
          technologies: 'React js | API ',
      link: 'https://gemini-clone-in.netlify.app/',
      github: 'https://github.com/PrinceRaj82/GeminiClone',
    },
    {
      id: 2,
      title: 'YT Playlist Anlyser',
      img: IMG4,
      description:
        ' YouTube Playlist Analyzer that calculates total duration, visualizes video data with charts, supports dark mode, and enables sharing or embedding results — built with React, Vite, and Tailwind CSS.'
      technologies: 'React | Typescript | Tailwind',
      link: 'https://ytplaylistanlyser.vercel.app/',
      github: 'https://github.com/PrinceRaj82/YTPLAYLISTANLYSER',
    },
    // {
    //   id: 3,
    //   title: 'YoutubeClone',
    //   img: IMG3,
    //   description:
    //     'Fully responsive interactive website built based on Figma design',
    //   technologies: 'JavaScript | CSS',
    //   link: 'https://meri-mg.github.io/shelter/pages/main/index.html',
    //   github: 'https://github.com/Meri-MG/shelter',
    // },
    {
      id: 4,
      title: 'Menu page',
      img: IMG2,
      description: 'An interactive menu using HTML, CSS, and JavaScript with smooth navigation and a user-friendly design for easy browsing',
      technologies: 'JavaScript | HTML | CSS',
      link: 'https://menu-landingpge.netlify.app/',
      github: 'https://github.com/PrinceRaj82/MenuPage',
    },
    // {
    //   id: 5,
    //   title: 'World News',
    //   img: IMG5,
    //   description:
    //     'Fully responsive interactive website built based on Adobe XD design',
    //   technologies: 'JavaScript | CSS',
    //   link: 'https://meri-mg.github.io/Unilab-world-news/',
    //   github: 'https://github.com/Meri-MG/Unilab-world-news',
    // },
    // {
    //   id: 6,
    //   title: 'Math Resource',
    //   img: IMG6,
    //   description:
    //     'Real-world group project which is still in progress and will provide educational platform for future young developers',
    //   technologies: 'JavaScript | Scss | Python',
    //   link: 'https://lukinoo.github.io/math-resource/',
    //   github: 'https://github.com/lukinoo/math-resource',
    // },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
