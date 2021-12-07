import React ,{useContext} from 'react';
import { WorkContext } from '../../App';
import Work from '../work/Work';
import '../work/work.css';
import '../about/about.css';
import { Link } from 'react-router-dom';

export default function Works() {
    const works=useContext(WorkContext);
    return (
        <section id="works">
      <div className="ourworks container">
      <div class="breadcrumbs container">
        <Link to="/" className="breadcrumb-link">
          Home
        </Link>

        <div class="breadcrumbs-divider"></div>
        <Link to="/work" className="breadcrumb-link active">
          Work
        </Link>
      </div>
        <h1 className="worksheading">Design Work</h1>
        <div className="container ourworks-desktop">
          <div className="row">
            {works.map((work) => {
              return (
                <Work
                  key={work.id}
                  classNameattribute={work.class}
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
       
        </div>
        </div>
        </section>
    )
}
