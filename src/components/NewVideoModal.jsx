import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useVideo } from "../context/VideoContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #111;
  padding: 2rem 3rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  width: 50%;
  max-width: 600px;
  position: relative;
  border: 2px solid #6bd1ff; /* Borda adicionada */
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
`;

const FormTitle = styled.h1`
  text-align: center;
  margin-bottom: 1rem;
`;

const FormSubtitle = styled.p`
  text-align: center;
  margin-bottom: 2rem;
  color: #888;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  color: #888;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #333;
  border-radius: 4px;
  background-color: #222;
  color: white;
`;

const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid #333;
  border-radius: 4px;
  background-color: #222;
  color: white;
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #333;
  border-radius: 4px;
  background-color: #222;
  color: white;
  resize: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 4px;
  background-color: ${(props) => (props.primary ? "#0074d9" : "#444")};
  color: white;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.primary ? "#005bb5" : "#666")};
  }
`;

const NewVideoModal = ({ isOpen, onClose, video, onSave }) => {
  const [videoUrl, setVideoUrl] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [videoName, setVideoName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Front End");
  const { addVideo } = useVideo();

  useEffect(() => {
    if (video) {
      setVideoUrl(video.url);
      setThumbnailUrl(video.thumbnail);
      setVideoName(video.name);
      setDescription(video.description);
      setCategory(video.category);
    } else {
      setVideoUrl("");
      setThumbnailUrl("");
      setVideoName("");
      setDescription("");
      setCategory("Front End");
    }
  }, [video]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newVideo = {
      url: videoUrl,
      thumbnail: thumbnailUrl,
      name: videoName,
      description,
      category,
    };
    if (video) {
      onSave({ ...newVideo, id: video.id });
    } else {
      addVideo(newVideo);
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </CloseButton>
        <FormTitle>{video ? "Editar Vídeo" : "Novo Vídeo"}</FormTitle>
        <FormSubtitle>
          COMPLETE O FORMULÁRIO PARA {video ? "EDITAR O" : "CRIAR UM NOVO"} CARD
          DE VÍDEO.
        </FormSubtitle>
        <form onSubmit={handleSubmit}>
          <FormField>
            <Label htmlFor="videoName">Título</Label>
            <Input
              id="videoName"
              type="text"
              placeholder="Insira o título"
              value={videoName}
              onChange={(e) => setVideoName(e.target.value)}
              required
            />
          </FormField>
          <FormField>
            <Label htmlFor="category">Categoria</Label>
            <Select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="Front End">Front End</option>
              <option value="Back End">Back End</option>
              <option value="Mobile">Mobile</option>
            </Select>
          </FormField>
          <FormField>
            <Label htmlFor="thumbnailUrl">Imagem</Label>
            <Input
              id="thumbnailUrl"
              type="text"
              placeholder="Insira o link da imagem"
              value={thumbnailUrl}
              onChange={(e) => setThumbnailUrl(e.target.value)}
              required
            />
          </FormField>
          <FormField>
            <Label htmlFor="videoUrl">Vídeo</Label>
            <Input
              id="videoUrl"
              type="text"
              placeholder="Digite o link do vídeo"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              required
            />
          </FormField>
          <FormField>
            <Label htmlFor="description">Descrição</Label>
            <TextArea
              id="description"
              rows="4"
              placeholder="Descreva o vídeo"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormField>
          <ButtonContainer>
            <Button type="submit" primary>
              {video ? "Salvar" : "Guardar"}
            </Button>
            <Button type="button" onClick={onClose}>
              Cancelar
            </Button>
          </ButtonContainer>
        </form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default NewVideoModal;
