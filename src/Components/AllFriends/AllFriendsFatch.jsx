import React, {  use, useState } from 'react';
import SingleFriend from './SingleFriend';
import { useEffect } from 'react';
import { ScaleLoader } from 'react-spinners';
const allFriendsPromise = fetch('/allFriends.json').then(res =>res.json())

const AllFriendsFatch = () => {
    const AllFriendsArray = use(allFriendsPromise)

   const [friends , setFriends] =useState([])
   const [loading , setLoading]=useState(true)

  useEffect(()=> {
  const fetchFriends = async ()=> {
  const res = await fetch('/allFriends.json')
  const data = await res.json()
  setTimeout(() => {
     setFriends(data)
    setLoading(false)
  }, 500);
  


  } ;
  fetchFriends()





  } , [])



    return (
        <div className='mt-5 p-4 mb-10 sm:mt-8'>
            <div className='mb-4 sm:mb-6'>
                <h2 className='font-bold text-2xl'>Your Friends</h2>
            </div>
           
            <div className='grid  gap-5 sm:grid-cols-2 md:grid-cols-4'>
                {
                  loading ? (<div className='flex justify-center'> <ScaleLoader  color='#244D3F'/></div> ) : 
                  
                   friends.map(friend => <SingleFriend key={friend.id} friend ={friend}></SingleFriend>) 
                 
                }
                
            </div>
         
            
        </div>
    );
};

export default AllFriendsFatch;