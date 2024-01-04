/* eslint-disable react/prop-types */
'use client' 
import React from 'react';
const VideoPlayer = ({ videoUrl }) => {
  return (
    <div className=' rounded-3xl'>
      <iframe
        
        width="380"
        height="305"
        src={`https://www.youtube.com/embed/${videoUrl}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
