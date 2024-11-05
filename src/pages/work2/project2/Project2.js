// Project1.js
import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./Project2.scss";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/footer";
import projectImg1 from "./img/main.png";
import projectImg2 from "./img/contents.png";
import projectImg3 from "./img/ssangyong.png";
import projectImg4 from "./img/map.png";
import projectImg5 from "./img/board.png";
import projectImg6 from "./img/store.png";

const Project2 = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, src: projectImg1, alt: "쌍용자동차 메인" },
    { id: 2, src: projectImg2, alt: "쌍용자동차 컨텐츠" },
    { id: 3, src: projectImg3, alt: "쌍용이란" },
    { id: 4, src: projectImg4, alt: "지점 안내" },
    { id: 5, src: projectImg5, alt: "게시판" },
    { id: 6, src: projectImg6, alt: "상품 상세화면" },
  ];

  return (
    <div className="portfolio-container">
      <Header />
      <header className="portfolio-header">
        <h1>마크베이스 통합홈페이지</h1>
        <div className="description">
          <p>
            Vue3로 구현한 마크베이스 통합 홈페이지 입니다. 기능별 여러 개로
            운영되던 홈페이지를, UV 향상과 검색엔진 최적화를 위해 하나의
            홈페이지로 통합했습니다. <br></br>디자인과 백엔드를 제외한 기획,
            프론트엔드 부분을 담당하였습니다. <br></br>
          </p>
        </div>
      </header>

      <main className="portfolio-main">
        <div className="image-grid">
          {images.map((image) => (
            <div
              key={image.id}
              className="image-item"
              onClick={() => setSelectedImage(image)}
            >
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </main>

      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content">
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <button
              className="close-button"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}

      <footer className="portfolio-footer">
        <p>자세한 내용은 XD 파일로 준비해 두었습니다.</p>
      </footer>
      <Footer />
    </div>
  );
};

export default Project2;
