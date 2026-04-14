import React from "react";

const SingleFriend = ({ friend }) => {
    const tags =friend.tags
  return (
    <div>
      <div>
        <div className="flex items-center justify-center ">
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center gap-4 w-full max-w-sm">
            
            <div className=" rounded-full overflow-hidden">
              <img src={friend.picture} alt="" />
            </div>

        
            <h2 className="text-2xl font-bold text-center">
              {friend.name}
            </h2>

            
            <p className="text-gray-500   px-4 py-1 ">
              {friend.days_since_contact}d ago
            </p>

            
            <div className="px-4 py-1  text-sm font-medium flex flex-wrap gap-2">
              {
                tags.map((tag , index ) => <span className="px-3 py-2 rounded-full bg-green-100 text-green-700 font-medium" tag={tag} key={index}> {tag}</span> )
              }
            </div>

        
            <span className="px-5 py-2 rounded-full bg-orange-400 text-white text-sm font-medium">
              Status
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFriend;
