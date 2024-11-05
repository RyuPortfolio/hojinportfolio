// Project1.js
import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./Coex.scss";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/footer";
import projectImg1 from "./img/pana3.jpg";
import projectImg2 from "./img/pana1.jpg";
import projectImg3 from "./img/pana2.jpg";
import projectImg4 from "./img/pana4.jpg";
import projectImg5 from "./img/panai3.png";
import projectImg6 from "./img/panai1.png";
import projectImg7 from "./img/panai2.png";
import projectImg8 from "./img/panai4.png";

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
        <h1>코엑스 파나플렉스 디자인</h1>
        <div className="description">
          <p>
            코엑스 전시회 부스 외벽의 파나플렉스를 타이포그래피로
            표현하였습니다.
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

export default Project1;
