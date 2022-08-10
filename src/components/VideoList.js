import React from "react";

import VideoCard from "./VideoCard";
const VideoList = ({ videos, onVideoSelect }) => {
  const renderedItem = videos.map((video) => (
    <VideoCard onVideoSelect={onVideoSelect} video={video} />
  ));

  return <div className="ui relaxed divided list ">{renderedItem}</div>;
};

export default VideoList;
