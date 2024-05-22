import React from "react";
import YouTube from "react-youtube";

const YouTubePlayer = ({ videoId }) => {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
      //   controls: 0, // Hide player controls
      modestbranding: 0, // Remove YouTube logo
      rel: 0, // Don't show related videos at the end
      showinfo: 0, // Hide video information
      fs: 0, // Hide fullscreen button
      cc_load_policy: 0, // Hide captions
      iv_load_policy: 3, // Hide annotations
      disablekb: 1, // Disable keyboard controls (optional)
    },
  };

  const onReady = (event) => {
    // Access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  return <YouTube videoId={videoId} opts={opts} onReady={onReady} />;
};

export default YouTubePlayer;
