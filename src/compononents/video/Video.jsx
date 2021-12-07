import React from "react";
import './video.css';

function Video() {
  return (
    <div class="home-video">
    <video class="home-video" width="100%" autoPlay loop muted>
      <source src="./images/dielect1.mp4" type="video/mp4" />
    </video>
  </div>
  );
}
export default Video;
