import React from 'react';
import VideoPlayer from './VideoPlayer';


const VideoPage = () => {
    const videoUrl1 = 'CLKf21AqZnc';
    const videoUrl2 = 'H-1y4HS_FqM';
    const videoUrl3 = 'zyAcsWQ5tr8'; 

    return (
      <div>
        <h1 className=" text-center text-5xl text-primary font-extrabold my-20">Videos</h1>
       <div className=" mx-5 px-2 lg:grid grid-cols-3  gap-12 ml-20 items-center ">
        <div className=" my-10"><VideoPlayer videoUrl={videoUrl1} /></div>
        <div className=" my-10"> <VideoPlayer videoUrl={videoUrl2} /></div>
        <div className=" my-10"> <VideoPlayer videoUrl={videoUrl3} /></div>
        
      
       </div>
      </div>
    );
};
  
  export default VideoPage;



  