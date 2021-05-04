import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";

export default function VideoPlayer({ ...props }) {
  const [videoId, setVideoId] = useState(null);

  useEffect(() => {
    getRandomVideo();
  }, []);

  const getRandomVideo = () => {
    const channelId = "UC9CuvdOVfMPvKCiwdGKL3cQ";
    const apiKey = "AIzaSyCiLBRp-i7dk4sja4CTxXPfqSTyteWB-mQ";

    const randomYear = Math.floor(Math.random() * (2021 - 2015 + 1)) + 2015;
    const randomMonth = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    const randomMonthString =
      randomMonth > 9 ? `${randomMonth}` : `0${randomMonth}`;
    const publishedBefore = `${randomYear}-${randomMonthString}-01T00:00:00Z`;

    const webUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=5&publishedBefore=${publishedBefore}&order=date&key=${apiKey}`;

    const randomVideo = Math.floor(Math.random() * 5);

    // fetch(webUrl)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setVideoId(data.items[randomVideo].id.videoId);
    //   });
    setVideoId(null);
    setVideoId("8AdocwLhADo");
  };

  const handleOnReady = (event) => {
    event.target.playVideo();
  };

  const opts = {
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div>
      {videoId && (
        <YouTube
          className={"youtube"}
          opts={opts}
          videoId={videoId}
          onEnd={getRandomVideo}
          onReady={handleOnReady}
        />
      )}
    </div>
  );
}
