import React, { useEffect, useRef, useState } from "react";

const YouTubePlayer = ({ videoId }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const iframeRef = useRef(null);

  const config = {
    autoplay: true,
    mute: true,
    showControls: false,
    loop: true,
    startAt: 0,
    allowFullscreen: true,
    hideYouTubeLogo: true,
    hideRelatedVideos: true,
    showCaptions: false,
    aspectRatio: "16:9",
  };

  const buildYouTubeUrl = () => {
    const baseUrl = "https://www.youtube.com/embed/";
    const params = new URLSearchParams({
      enablejsapi: "1",
      origin: window.location.origin,
    });

    if (config.autoplay) params.append("autoplay", "1");
    if (config.mute) params.append("mute", "1");
    if (config.loop) {
      params.append("loop", "1");
      params.append("playlist", videoId);
    }
    if (config.startAt > 0) params.append("start", config.startAt.toString());
    if (!config.showControls) params.append("controls", "0");
    if (config.hideYouTubeLogo) params.append("modestbranding", "1");
    if (config.hideRelatedVideos) params.append("rel", "0");
    if (config.showCaptions) params.append("cc_load_policy", "1");

    console.log("YouTube URL:", `${baseUrl}${videoId}?${params.toString()}`);

    return `${baseUrl}${videoId}?${params.toString()}`;
  };

  const getAspectRatioPadding = () => {
    switch (config.aspectRatio) {
      case "4:3":
        return "75%";
      case "1:1":
        return "100%";
      case "16:9":
      default:
        return "56.25%";
    }
  };

  useEffect(() => {
    const isValidYouTubeId = /^[a-zA-Z0-9_-]{11}$/.test(videoId);

    if (!isValidYouTubeId) {
      setError("Invalid YouTube Video ID");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    const handleIframeLoad = () => {
      setLoading(false);
    };

    const iframe = iframeRef.current;
    if (iframe) {
      iframe.addEventListener("load", handleIframeLoad);
      iframe.onerror = () => {
        setError("Failed to load video");
        setLoading(false);
      };
    }

    return () => {
      if (iframe) {
        iframe.removeEventListener("load", handleIframeLoad);
      }
    };
  }, [videoId]);

  return (
    <div className="relative w-full">
      <div
        className="relative w-full bg-slate-950"
        style={{ paddingTop: getAspectRatioPadding() }}
      >
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-950">
            <div className="w-12 h-12 rounded-full border-4 border-slate-800 border-t-slate-400 animate-spin" />
          </div>
        )}

        {error && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950 text-white p-4">
            <div className="mb-2 text-xl">⚠️</div>
            <div className="text-center">{error}</div>
          </div>
        )}
        {!error && (
          <iframe
            ref={iframeRef}
            className={`absolute inset-0 w-full h-full ${loading ? "opacity-0" : "opacity-100"}`}
            src={buildYouTubeUrl()}
            title="YouTube video player"
            allow={`accelerometer; ${config.autoplay ? "autoplay; " : ""}`}
            allowFullScreen={config.allowFullscreen}
            style={{
              transition: "opacity 0.3s ease",
              border: "none",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default YouTubePlayer;
