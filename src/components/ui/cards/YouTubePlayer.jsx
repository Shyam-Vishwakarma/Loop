import React from "react";

const YouTubePlayer = (
  { videoId },
  autoplay = true,
  mute = true,
  showControls = true,
  hideRelatedVideos = true,
  modestBranding = true,
  hideAnnotations = true,
  className = ""
) => {
  if (!videoId) {
    return (
      <div
        className={`bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative flex items-center justify-center ${className}`}
        role="alert"
      >
        <strong className="font-bold mr-2">Error:</strong>
        <span className="block sm:inline">videoId prop is missing.</span>
      </div>
    );
  }

  const playerVars = {
    autoplay: autoplay ? 1 : 0,
    mute: mute ? 1 : 0,
    controls: showControls ? 1 : 0,
    rel: hideRelatedVideos ? 0 : 1,
    modestbranding: modestBranding ? 1 : 0,
    iv_load_policy: hideAnnotations ? 3 : 1,
  };

  const playerVarsString = new URLSearchParams(playerVars).toString();
  const videoSrc = `https://www.youtube.com/embed/${videoId}?${playerVarsString}`;
  console.log("YouTube Player Source:", videoSrc);

  return (
    <>
      <iframe
        className="w-full h-full rounded shadow overflow-hidden"
        src={videoSrc}
        allow="accelerometer; autoplay; encrypted-media; gyroscope;"
      ></iframe>
    </>
  );
};

export default YouTubePlayer;
