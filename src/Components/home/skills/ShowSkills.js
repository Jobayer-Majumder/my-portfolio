import React from 'react';

const ShowSkills = ({skill}) => {
    return (
        <>
            <div className="col-md-6 mb-3">
                <h6 className='text-secondary'>{skill.title}</h6>
                <div className="progress">
                    <div className="progress-bar bg-brand text-secondary fw-bold" role="progressbar" style={{ width: `${skill.skill}` }} aria-valuenow={skill.skill} aria-valuemin="0" aria-valuemax="100">{skill.skill}</div>
                </div>
            </div>
        </>
    );
};

export default ShowSkills;