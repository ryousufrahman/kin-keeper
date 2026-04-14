import React from "react";

import { AllContext } from "../../../GlobalContext/GlobalContext";

const Interection = () => {
    
            
            
    
    
   

  return (
    <div className="max-w-[1200px] mx-auto p-4 mt-10">
        <h2 className="font-bold text-4xl mb-4">Timeline</h2>
      <div className="sort flex items-center ">
        <div className="dropdown dropdown-center">
          <div tabIndex={0} role="button" className="btn m-1">
            Filter timeline
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>

      


    </div>
  );
};

export default Interection;
