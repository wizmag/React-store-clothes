import React from 'react';

const Announcement = () => {
  return (
    <div className='bg-black w-full overflow-hidden'>
      <div
        className='h-6 text-xl flex bg-black items-center 
        '
      >
        <span className='animate-[runtext_10s_linear_infinite] hover:pause text-teal-50 text-left w-full'>
          Free delivery!
        </span>
      </div>
    </div>
  );
};

export default Announcement;
