import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";

const ShowSkills = ({skill}) => {
    return (
        <>
            <div className="col-md-6 mb-3">
                <h6 className='text-secondary'>{skill.title}</h6>
                <ProgressBar completed={skill.skill} width={skill.skill} bgColor={'#F3D92C'} labelAlignment={'outside'}/>;
            </div>
        </>
    );
};

export default ShowSkills;