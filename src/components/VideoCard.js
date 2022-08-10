import "./videoCard.css";
import React from "react";

const VideoCard = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="item video-list">
      <img
        alt={video.snippet.title}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content ">
        <div className="header "> {video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoCard;
