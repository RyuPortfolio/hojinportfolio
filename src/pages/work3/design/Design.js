// Project1.js
import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./Design.scss";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/footer";
import projectImg1 from "./img/machinfo1.png";
import projectImg2 from "./img/machinfo2.png";
import projectImg3 from "./img/print.png";
import projectImg4 from "./img/machbase-favicon.png";
import projectImg5 from "./img/neo-product.png";

const Design = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, src: projectImg1, alt: "시스템인포" },
    { id: 2, src: projectImg2, alt: "시스템인포" },
    { id: 3, src: projectImg3, alt: "국가사업 프린트물" },
    { id: 4, src: projectImg4, alt: "파비콘" },
    { id: 5, src: projectImg5, alt: "제품디자인" },
  ];

  return (
    <div className="portfolio-container">
      <Header />
      <header className="portfolio-header">
        <h1>마크베이스 디자인물</h1>
        <div className="description">
          <p>
            마크베이스 전시회 시스템인포와 안내물, 파비콘, 제품디자인입니다.
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
        <p>자세한 내용은 AI 파일로 준비해 두었습니다.</p>
      </footer>
      <Footer />
    </div>
  );
};

export default Design;
