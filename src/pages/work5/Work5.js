import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./Work5.scss";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/Header";

const Work5 = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    {
      id: 1,
      youtubeId: "IDnXogM3hRA",
      title: "프로젝트 데모 영상 1",
      thumbnail: `https://img.youtube.com/vi/IDnXogM3hRA/maxresdefault.jpg`,
    },
    {
      id: 2,
      youtubeId: "1DR1TohMOc4",
      title: "프로젝트 데모 영상 2",
      thumbnail: `https://img.youtube.com/vi/1DR1TohMOc4/maxresdefault.jpg`,
    },
    {
      id: 3,
      youtubeId: "3Q0YAe9aamQ",
      title: "프로젝트 데모 영상 3",
      thumbnail: `https://img.youtube.com/vi/3Q0YAe9aamQ/maxresdefault.jpg`,
    },
  ];

  const getEmbedUrl = (youtubeId) => {
    return `https://www.youtube-nocookie.com/embed/${youtubeId}`;
  };

  return (
    <div className="portfolio-container">
      <Header />
      <header className="portfolio-header">
        <h1>마크베이스 유튜브</h1>
        <div className="description">
          <p>
            마크베이스 유튜브 편집영상입니다. 이 영상외에도 다양한 영상 작업을
            하였으나 현재는 올라와 있지 않은 상태입니다.
          </p>
        </div>
      </header>

      <main className="portfolio-main">
        <div className="image-grid">
          {videos.map((video) => (
            <div
              key={video.id}
              className="image-item"
              onClick={() => setSelectedVideo(video)}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="video-thumbnail"
              />
              <div className="play-button">▶</div>
            </div>
          ))}
        </div>
      </main>

      {selectedVideo && (
        <div className="modal-overlay" onClick={() => setSelectedVideo(null)}>
          <div className="modal-content">
            <iframe
              width="100%"
              height="100%"
              src={getEmbedUrl(selectedVideo.youtubeId)}
              title={selectedVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <button
              className="close-button"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedVideo(null);
              }}
            >
              ×
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Work5;
