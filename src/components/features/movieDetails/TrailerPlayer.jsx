import React, { useEffect } from "react";
import { CircleX } from "lucide-react";
import YouTubePlayer from "@components/ui/cards/YouTubePlayer";

const TrailerPlayer = ({ trailerKey, isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const playerAutoplay = true;
  const playerMute = false;
  const playerShowControls = true;
  const playerHideRelatedVideos = true;
  const playerModestBranding = true;
  const playerHideAnnotations = true;
  const playerLoop = false;

  return (
    <div
      className="w-full h-full relative border border-gray-800 rounded-lg shadow-md overflow-hidden"
      role="region"
      aria-label="Video Trailer Player"
    >
      <YouTubePlayer
        videoId={trailerKey}
        autoplay={playerAutoplay}
        mute={playerMute}
        showControls={playerShowControls}
        hideRelatedVideos={playerHideRelatedVideos}
        modestBranding={playerModestBranding}
        hideAnnotations={playerHideAnnotations}
        loop={playerLoop}
        className="w-full h-full"
      />

      <button
        onClick={onClose}
        className="absolute top-4 right-[0.2rem] text-white cursor-pointer
        lg:top-4 lg:right-2 md:top-3 md:right-1 hidden sm:inline opacity-60 hover:opacity-90"
        aria-label="Close trailer"
      >
        <CircleX className="lg:w-12 lg:h-12 md:w-10 md:h-10 sm:w-8 sm:h-8 w-6 h-6" />
        <span className="text-md mt-0.5 md:mt-1 ">ESC</span>
      </button>
    </div>
  );
};

export default TrailerPlayer;
