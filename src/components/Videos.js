import React from 'react';
import VideoPlayer from './VideoPlayer';


const VideoPage = () => {
    const videoUrl1 = 'CLKf21AqZnc';
    const videoUrl2 = 'H-1y4HS_FqM';
    const videoUrl3 = 'zyAcsWQ5tr8'; 

    return (
      <div>
        <h1 className="  ml-20 lg:ml-0 text-center text-2xl my-10 lg:text-5xl lg:my-20 text-primary font-extrabold">Videos</h1>
       <div className=" mx-auto px-2 lg:grid grid-cols-3  gap-12   ml-20 lg:ml-10 items-center ">
        <div className=" my-10"><VideoPlayer videoUrl={videoUrl1} /></div>
        <div className=" my-10"> <VideoPlayer videoUrl={videoUrl2} /></div>
        <div className=" my-10"> <VideoPlayer videoUrl={videoUrl3} /></div>
       </div>
      </div>
    );
};
  
  export default VideoPage;



  