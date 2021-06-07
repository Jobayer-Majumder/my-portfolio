import React from 'react';
import ShowSkills from './ShowSkills';
import Fade from 'react-reveal/Fade';

const skillsData = [
    {
        title: 'JavaScript',
        skill: '80%'
    },
    {
        title: 'React.js',
        skill: '85%',
    },
    {
        title: 'Node.js',
        skill: '50%',
    },
    {
        title: 'Express.js',
        skill: '55%'
    },
    {
        title: 'JSON',
        skill: '75%'
    },
    {
        title: 'Redux',
        skill: '50%'
    },
    {
        title: 'MongoDB',
        skill: '70%'
    },
    {
        title: 'HTML5/CSS3',
        skill: '90%'
    },
    {
        title: 'Bootstrap',
        skill: '95%',
    },
    {
        title: 'Material UI',
        skill: '60%'
    }
]

const Skills = () => {
    return (
        <section className='bg-dark'>
            <Fade bottom cascade>
                <div className="container pt-5 pb-5">
                    <h3 className="text-secondary mb-4">Skills</h3>
                    <div className="row row-cols-md-2">
                        {
                            skillsData.map((skill, index) => <ShowSkills key={index++} skill={skill} />)
                        }
                    </div>
                </div>
            </Fade>
        </section>
    );
};

export default Skills;