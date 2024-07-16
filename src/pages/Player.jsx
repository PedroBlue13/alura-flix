// src/pages/Player.jsx
import React from "react";
import { useParams, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useVideo } from "../context/VideoContext";

const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to right, #000, #001f3f, #0074d9);
  color: white;
  padding-top: 5rem;
`;

const VideoWrapper = styled.div`
  width: 80%;
  max-width: 800px;
  margin-top: 2rem;
`;

const Video = styled.video`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const Player = () => {
  const { id } = useParams();
  const location = useLocation();
  const { videos } = useVideo();
  const video = videos.find((v) => v.url.includes(id));
  const params = new URLSearchParams(location.search);
  const autoPlay = params.get("autoplay") === "true";
  const videoUrl = video ? video.url : "";

  return (
    <PlayerContainer>
      <h1>Playing: {video ? video.name : "Video"}</h1>
      <VideoWrapper>
        <Video controls autoPlay={autoPlay}>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </Video>
      </VideoWrapper>
    </PlayerContainer>
  );
};

export default Player;
