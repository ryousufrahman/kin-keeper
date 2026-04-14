import React, { useContext } from 'react';
import { AllContext } from '../../../GlobalContext/GlobalContext';
import EmpthyLine from './EmpthyLine';

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
          <div className=''>
           {
              allInterection.length == 0 ? <EmpthyLine></EmpthyLine> : <h1>interection {allInterection.length}</h1>
            }
          </div>
        </div>
    );
};

export default Timeline;