// Work1.js
import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./Work4.scss";
import Footer from "../../components/footer/footer";
import projectImg1 from "./img/seo.jpg";
import Header from "../../components/header/Header";

const Work4 = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [{ id: 1, src: projectImg1, alt: "구글 SEO" }];

  return (
    <div className="portfolio-container">
      <Header />
      <header className="portfolio-header">
        <h1>검색엔진 최적화</h1>
        <div className="description">
          <p>
            마크베이스의 통합홈페이지 개설 후 평균 UV수는 100~200회였습니다. 총
            3차례의 SEO 개선을 통하여 UV수를 500% 가량 상승시켰습니다.
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
      <Footer />
    </div>
  );
};

export default Work4;
