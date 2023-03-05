import React from 'react';
import videofon from '../../assets/video/video.MOV';
import style from './Video.module.scss';
import { useEffect, useRef } from 'react';

function Video() {
   const vidRef = useRef();
   useEffect(() => {
      vidRef.current.play();
   }, []);
   return (
      <div className={style.wrapper}>
         <video
            ref={ vidRef }
            src={videofon}
            autoPlay
            controls
            lop
            muted
         ></video>
      </div>
   );
}

export default Video;
