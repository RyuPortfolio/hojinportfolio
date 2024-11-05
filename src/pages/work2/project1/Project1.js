// Project1.js
import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./Project1.scss";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/footer";
import projectImg1 from "./img/mainb.png";
import projectImg2 from "./img/mainw.png";
import projectImg3 from "./img/sqlb.png";
import projectImg4 from "./img/sqlw.png";
import projectImg5 from "./img/tagb.png";
import projectImg6 from "./img/tagw.png";
import projectImg7 from "./img/sheet.png";
import projectImg8 from "./img/edit.png";

const Project1 = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, src: projectImg1, alt: "네오 메인화면" },
    { id: 2, src: projectImg2, alt: "마크베이스 서브화면" },
    { id: 3, src: projectImg3, alt: "상품 상세화면" },
    { id: 4, src: projectImg4, alt: "회원가입 화면" },
    { id: 5, src: projectImg5, alt: "관리자 대시보드" },
    { id: 6, src: projectImg6, alt: "통계 화면" },
    { id: 7, src: projectImg7, alt: "관리자 대시보드" },
    { id: 8, src: projectImg8, alt: "통계 화면" },
  ];

  return (
    <div className="portfolio-container">
      <Header />
      <header className="portfolio-header">
        <h1>마크베이스 NEO</h1>
        <div className="description">
          <p>
            React로 만든 마크베이스의 소프트웨어 NEO입니다. 일부 디자인 수정 및
            HTML + SCSS로 다크모드와 화이트모드 템플릿 생성 파트를 담당했습니다.
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

export default Project1;
