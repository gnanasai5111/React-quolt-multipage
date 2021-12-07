import React, { useContext } from 'react'
import Video from '../../compononents/video/Video'
import { WorkContext } from '../../App';
import Work from '../work/Work';
import '../work/work.css';
import '../about/about.css';
import { Link } from 'react-router-dom';



export default function Home() {
    const works=useContext(WorkContext).slice(0,3);
    return (
        <div>
        <Video />
        <section id="works">
      <div className="ourworks container">
        <h1 className="worksheading">Design Work</h1>
        <div className="container ourworks-desktop">
          <div className="row">
            {works.map((work) => {
              return (
                <Work
                  key={work.id}
                  classNameattribute={work.className}
                  target={work.target}
                  src={work.src}
                  alt={work.alt}
                  fit={work.fit}
                  position={work.position}
                  overlayheading={work.overlayheading}
                  overlaysubheading={work.overlaysubheading}
                />
              );
            })}
          </div>
          <div className="work-projects-btn container">
          <Link to="/work"><button className=" button-work">View All Projects</button></Link>
        </div>
        </div>
        </div>
        </section>

    <section id="aboutus">
      <center>
        <h2 className="Aboutusheading">About Quolt</h2>
 
      </center>
      <div className="aboutus-mobile">
        <div className="aboutus-image" style={{backgroundImage: "url(images/aboutus/1.jpg)"}}>
        </div>
        <div className="container">
          <p className="aboutus-para"><strong style={{fontSize:"2rem"}}>Quolt </strong> was formed in 2016 with the vision to blend Design ,Technology and Innovation to meet futuristic requirements. Quolt is driven by Design entrepreneurs with variety of
            skills in the field of Industrial Design .
            Quolt has wide portfolio of products & services in various sectors in the industry like automobile, toy, medical and pharmaceutical, defence, IOT, furniture, electronics, safety etc; which has helped the team to hone their skills and
            deliver
            quality products.
          </p>
        </div>
      </div>
    </section>
            
        </div>
    )
}
