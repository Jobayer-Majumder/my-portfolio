import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import Zoom from 'react-reveal/Zoom'


const ShowSkills = ({ skill }) => {
    return (
        <>
            <Zoom>
                <div className="col-md-6 mb-3">
                    <h6 className='text-secondary'>{skill.title}</h6>
                    <ProgressBar completed={skill.skill} width={skill.skill} bgColor={'#F3D92C'} labelAlignment={'outside'} />;
                </div>
            </Zoom>
        </>
    );
};

export default ShowSkills;