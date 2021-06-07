import React from 'react';
import Navbar from '../../home/navbar/Navbar'
import AllProject from '../AllProject/AllProject';
import allProjectsData from './AllProjectsData';


const AllProjects = () => {
    return (
        <>
            <section className='' style={{background: 'black'}}>
                <Navbar />
                <div className="container pt-5">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            allProjectsData.map((project, index) => <AllProject key={index++} project={project}/>)
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default AllProjects;