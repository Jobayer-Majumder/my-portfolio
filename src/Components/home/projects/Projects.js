import React from 'react';
import { useHistory } from 'react-router-dom';
import projectData from './ProjectsData';
import ShowProjects from './ShowProjects';


const Projects = () => {
    const history = useHistory()
    const handleRouteChange = () => {
        history.push('/projects')
    }

    return (
        <section id='work' style={{ background: '#1b1b1b' }}>
            <div className="container pt-5">
                <h1 className="text-secondary mb-5 text-center">Some Of My Work</h1>
                <div className="row row-cols-md-1">
                    {
                        projectData.map((project, index) => <ShowProjects key={index++} project={project} />)
                    }
                </div>
                <div className='text-center py-5'>
                    <button onClick={handleRouteChange} className="btn btn-brand text-brand">Show More</button>
                </div>
            </div>
        </section>
    );
};

export default Projects;