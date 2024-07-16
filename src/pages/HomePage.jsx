import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useVideo } from "../context/VideoContext";
import NewVideoModal from "../components/NewVideoModal";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
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
  width: 80%;
  max-width: 300px;
  padding: 1rem 2rem;
  background-color: ${(props) => props.bgColor || "#001f3f"};
  color: white;
  margin: 1rem auto;
  text-align: center;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: none;
    margin-left: 5%;
  }
`;

const VideoList = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  padding: 0 2rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    padding: 0 1rem;
  }
`;

const VideoItem = styled.div`
  position: relative;
  color: white;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;

const CategoryTag = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: ${(props) => {
    switch (props.category) {
      case "Front End":
        return "#0074d9";
      case "Back End":
        return "#2ECC40";
      case "Mobile":
        return "#FFDC00";
      default:
        return "#fff";
    }
  }};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: bold;
  text-transform: uppercase;
`;

const ThumbnailContainer = styled.div`
  width: 100%;
  border-radius: 8px;
  padding: 4px;
  position: relative;
  border: ${(props) => {
    switch (props.category) {
      case "Front End":
        return "4px solid #0074d9";
      case "Back End":
        return "4px solid #2ECC40";
      case "Mobile":
        return "4px solid #FFDC00";
      default:
        return "4px solid #fff";
    }
  }};
`;

const Thumbnail = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const VideoName = styled.h3`
  margin-top: 0.5rem;
  text-align: center;
  font-size: 2rem; /* Ajusta o tamanho da fonte conforme necessário */
`;

const VideoDescription = styled.p`
  margin: 0 0 1rem 0;
  text-align: center;
  font-size: 1rem;
`;

const AdditionalImage = styled.img`
  width: 200px;
  height: auto;
  border-radius: 8px;
  margin-top: 1rem;
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

const ImageContainer = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  border-radius: 10px;
  position: relative;
  overflow: hidden; /* Adicionado para evitar bordas visíveis */
`;

const MainContentOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  background-color: #333;
  border-radius: 0 0 8px 8px;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  &:hover {
    color: ${(props) => props.hoverColor || "white"};
  }
`;

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const { videos, removeVideo, updateVideo } = useVideo();
  const navigate = useNavigate();

  const extractVideoId = (url) => {
    const urlObj = new URL(url);
    return urlObj.searchParams.get("v") || url;
  };

  const handleVideoClick = (video) => {
    const videoId = extractVideoId(video.url);
    navigate(`/video/${videoId}?autoplay=true`);
  };

  const handleEditClick = (video, e) => {
    e.stopPropagation();
    setCurrentVideo(video);
    setIsModalOpen(true);
  };

  const handleDeleteClick = (videoId, e) => {
    e.stopPropagation();
    removeVideo(videoId);
  };

  const handleCloseModal = () => {
    setCurrentVideo(null);
    setIsModalOpen(false);
  };

  const categorizedVideos = {
    frontEnd: videos.filter((video) => video.category === "Front End"),
    backEnd: videos.filter((video) => video.category === "Back End"),
    mobile: videos.filter((video) => video.category === "Mobile"),
  };

  return (
    <HomeContainer>
      <Header onAddVideoClick={() => setIsModalOpen(true)} />
      <NewVideoModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        video={currentVideo}
        onSave={updateVideo}
      />

      <ImageContainer>
        <img
          src={ExampleImage}
          alt="Example"
          style={{ width: "100%", borderRadius: "8px" }}
        />
        <MainContentOverlay>
          <CategoryTag category="Front End">Front-End</CategoryTag>
          <VideoName>Example Title</VideoName>
          <VideoDescription>Example description of the video.</VideoDescription>
          <AdditionalImage src={ExampleImage} alt="Additional" />
        </MainContentOverlay>
      </ImageContainer>

      <SectionTitle bgColor="#0074d9">FRONT END</SectionTitle>
      <VideoList>
        {categorizedVideos.frontEnd.map((video, index) => (
          <VideoItem key={index} onClick={() => handleVideoClick(video)}>
            <ThumbnailContainer category="Front End">
              <Thumbnail src={video.thumbnail} alt={`Video ${index + 1}`} />
              <CategoryTag category="Front End">Front-End</CategoryTag>
              <IconContainer>
                <IconButton
                  onClick={(e) => handleDeleteClick(video.id, e)}
                  hoverColor="red"
                >
                  <FontAwesomeIcon icon={faTrash} /> DELETAR
                </IconButton>
                <IconButton
                  onClick={(e) => handleEditClick(video, e)}
                  hoverColor="#0074d9"
                >
                  <FontAwesomeIcon icon={faEdit} /> EDITAR
                </IconButton>
              </IconContainer>
            </ThumbnailContainer>
            <VideoName>{video.name}</VideoName>
            <VideoDescription>Descrição do vídeo...</VideoDescription>
          </VideoItem>
        ))}
      </VideoList>

      <SectionTitle bgColor="#2ECC40">BACK END</SectionTitle>
      <VideoList>
        {categorizedVideos.backEnd.map((video, index) => (
          <VideoItem key={index} onClick={() => handleVideoClick(video)}>
            <ThumbnailContainer category="Back End">
              <Thumbnail src={video.thumbnail} alt={`Video ${index + 1}`} />
              <CategoryTag category="Back End">Back-End</CategoryTag>
              <IconContainer>
                <IconButton
                  onClick={(e) => handleDeleteClick(video.id, e)}
                  hoverColor="red"
                >
                  <FontAwesomeIcon icon={faTrash} /> DELETAR
                </IconButton>
                <IconButton
                  onClick={(e) => handleEditClick(video, e)}
                  hoverColor="#2ECC40"
                >
                  <FontAwesomeIcon icon={faEdit} /> EDITAR
                </IconButton>
              </IconContainer>
            </ThumbnailContainer>
            <VideoName>{video.name}</VideoName>
            <VideoDescription>Descrição do vídeo...</VideoDescription>
          </VideoItem>
        ))}
      </VideoList>

      <SectionTitle bgColor="#FFDC00">MOBILE</SectionTitle>
      <VideoList>
        {categorizedVideos.mobile.map((video, index) => (
          <VideoItem key={index} onClick={() => handleVideoClick(video)}>
            <ThumbnailContainer category="Mobile">
              <Thumbnail src={video.thumbnail} alt={`Video ${index + 1}`} />
              <CategoryTag category="Mobile">Mobile</CategoryTag>
              <IconContainer>
                <IconButton
                  onClick={(e) => handleDeleteClick(video.id, e)}
                  hoverColor="red"
                >
                  <FontAwesomeIcon icon={faTrash} /> DELETAR
                </IconButton>
                <IconButton
                  onClick={(e) => handleEditClick(video, e)}
                  hoverColor="#FFDC00"
                >
                  <FontAwesomeIcon icon={faEdit} /> EDITAR
                </IconButton>
              </IconContainer>
            </ThumbnailContainer>
            <VideoName>{video.name}</VideoName>
            <VideoDescription>Descrição do vídeo...</VideoDescription>
          </VideoItem>
        ))}
      </VideoList>
    </HomeContainer>
  );
};

export default HomePage;
