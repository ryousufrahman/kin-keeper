import React, { useContext } from 'react';
import { AllContext } from '../../../GlobalContext/GlobalContext';
import EmpthyState from './EmpthyState';

const Stats = () => {
      const allstate = useContext(AllContext)
      
           const {
                  allInterection 
                } =allstate
      
    return (
        <div>
           {
            allInterection.length ==0 ? <EmpthyState></EmpthyState> : <h1>pie chart is here : {allInterection.length}</h1>

           }
        </div>
    );
};

export default Stats;