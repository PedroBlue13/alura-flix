import React, { createContext, useContext, useState } from "react";

const VideoContext = createContext();

export const useVideo = () => {
  return useContext(VideoContext);
};

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);

  const addVideo = (video) => {
    setVideos((prevVideos) => [...prevVideos, video]);
  };

  const removeVideo = (videoId) => {
    setVideos((prevVideos) =>
      prevVideos.filter((video) => video.id !== videoId)
    );
  };

  const updateVideo = (updatedVideo) => {
    setVideos((prevVideos) =>
      prevVideos.map((video) =>
        video.id === updatedVideo.id ? updatedVideo : video
      )
    );
  };

  return (
    <VideoContext.Provider
      value={{ videos, addVideo, removeVideo, updateVideo }}
    >
      {children}
    </VideoContext.Provider>
  );
};
