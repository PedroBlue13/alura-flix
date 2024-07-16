// src/pages/HomePage.jsx
import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useVideo } from "../context/VideoContext";
import NewVideoModal from "../components/NewVideoModal";
import ExampleImage from "../assets/1.jpg"; // Substitua pelo caminho da sua imagem

const HomeContainer = styled.div`
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  background: #000;
  color: white;
`;

const SectionTitle = styled.h2`
  width: 40%;
  padding: 1rem 2rem;
  background-color: ${(props) => props.bgColor || "#001f3f"};
  color: white;
  margin: 0;
  text-align: center;
  border-radius: 10px;
`;

const VideoList = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  padding: 0 2rem;
  width: 100%;
`;

const VideoItem = styled.div`
  color: white;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const VideoName = styled.div`
  margin-top: 0.5rem;
  text-align: center;
`;

const ImageContainer = styled.div`
  margin: 2rem 0;
`;

const AddVideoButton = styled.button`
  margin: 1rem;
  padding: 0.5rem 1rem;
  background-color: #0074d9;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #005bb5;
  }
`;

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { videos } = useVideo();
  const navigate = useNavigate();

  const extractVideoId = (url) => {
    const urlObj = new URL(url);
    return urlObj.searchParams.get("v") || url;
  };

  const handleVideoClick = (video) => {
    const videoId = extractVideoId(video.url);
    navigate(`/video/${videoId}?autoplay=true`);
  };

  const categorizedVideos = {
    frontEnd: videos.filter((video) => video.category === "Front End"),
    backEnd: videos.filter((video) => video.category === "Back End"),
    mobile: videos.filter((video) => video.category === "Mobile"),
  };

  return (
    <HomeContainer>
      <AddVideoButton onClick={() => setIsModalOpen(true)}>
        Adicionar Novo Vídeo
      </AddVideoButton>
      <NewVideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <ImageContainer>
        <img
          src={ExampleImage}
          alt="Example"
          style={{ width: "100%", borderRadius: "8px" }}
        />
      </ImageContainer>

      <SectionTitle bgColor="#0074d9">FRONT END</SectionTitle>
      <VideoList>
        {categorizedVideos.frontEnd.map((video, index) => (
          <VideoItem key={index} onClick={() => handleVideoClick(video)}>
            <Thumbnail src={video.thumbnail} alt={`Video ${index + 1}`} />
            <VideoName>{video.name}</VideoName>
          </VideoItem>
        ))}
      </VideoList>

      <SectionTitle bgColor="#2ECC40">BACK END</SectionTitle>
      <VideoList>
        {categorizedVideos.backEnd.map((video, index) => (
          <VideoItem key={index} onClick={() => handleVideoClick(video)}>
            <Thumbnail src={video.thumbnail} alt={`Video ${index + 1}`} />
            <VideoName>{video.name}</VideoName>
          </VideoItem>
        ))}
      </VideoList>

      <SectionTitle bgColor="#FFDC00">MOBILE</SectionTitle>
      <VideoList>
        {categorizedVideos.mobile.map((video, index) => (
          <VideoItem key={index} onClick={() => handleVideoClick(video)}>
            <Thumbnail src={video.thumbnail} alt={`Video ${index + 1}`} />
            <VideoName>{video.name}</VideoName>
          </VideoItem>
        ))}
      </VideoList>
    </HomeContainer>
  );
};

export default HomePage;
