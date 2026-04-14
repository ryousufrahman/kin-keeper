import React, { useContext } from 'react';
import { AllContext } from '../../../GlobalContext/GlobalContext';

const Timeline = () => {
    const Allstate = useContext(AllContext)
       const {
                 call ,
                setCall ,
                text ,
                setText ,
                videoCall,
                setVideoCall ,
                allInterection ,
                setAllInterection
              } = Allstate
    return (
        <div>
         <p>{allInterection.length}</p>
        </div>
    );
};

export default Timeline;