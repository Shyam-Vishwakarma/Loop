export const isValidYouTubeId = (id) => {
  if (!id) return false;

  const youtubeIdRegex = /^[a-zA-Z0-9_-]{11}$/;
  return youtubeIdRegex.test(id);
};

export const buildYouTubeEmbedUrl = (videoId, config) => {
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
  if (config.startAt && config.startAt > 0)
    params.append("start", config.startAt.toString());
  if (config.showControls === false) params.append("controls", "0");
  if (config.hideYouTubeLogo) params.append("modestbranding", "1");
  if (config.hideRelatedVideos) params.append("rel", "0");
  if (config.showCaptions) params.append("cc_load_policy", "1");

  return `${baseUrl}${videoId}?${params.toString()}`;
};

export const getAspectRatioDimensions = (aspectRatio) => {
  switch (aspectRatio) {
    case "4:3":
      return { paddingTop: "75%" };
    case "1:1":
      return { paddingTop: "100%" };
    case "16:9":
    default:
      return { paddingTop: "56.25%" };
  }
};
