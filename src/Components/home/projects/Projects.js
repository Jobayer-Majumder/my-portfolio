import React from 'react';
import projectData from './ProjectsData';
import ShowProjects from './ShowProjects';


const Projects = () => {
    return (
        <section style={{background: '#1b1b1b'}}>
            <div className="container pt-5">
                <h1 className="text-secondary mb-5 text-center">Some Of My Work</h1>
                <div className="row row-cols-md-1">
                    {
                        projectData.map((project, index) => <ShowProjects key={index++} project={project} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Projects;