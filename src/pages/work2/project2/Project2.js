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
        <h1>쌍용자동차 홈페이지 리뉴얼</h1>
        <div className="description">
          <p>
            그린컴퓨터 아카데미에서 배운 UI/UX를 기반으로 기획, 디자인
            퍼블리싱한 페이지입니다.<br></br>html + css 그리고 jquery를 통해
            구현하였습니다. <br></br>
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
