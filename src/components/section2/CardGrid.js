import React from "react";
import { Link } from "react-router-dom";
import "./CardGrid.scss";
import img1 from "./img/vue3.png";
import img2 from "./img/html.png";
import img3 from "./img/ill.png";
import img4 from "./img/SEO.png";
import img5 from "./img/Youtube_logo.png";

const cardData = [
  {
    id: 1,
    image: img1,
    title: "Vue3",
    description: "첫 번째 작품 설명",
    path: "/machbase",
  },
  {
    id: 2,
    image: img2,
    title: "Publishing",
    description: "두 번째 작품 설명",
    path: "/publishing",
  },
  // {
  //   id: 3,
  //   image: img3,
  //   title: "Design",
  //   description: "세 번째 작품 설명",
  //   path: "/design",
  // },
  // {
  //   id: 4,
  //   image: img4,
  //   title: "SEO",
  //   description: "네 번째 작품 설명",
  //   path: "/seo",
  // },
  // {
  //   id: 5,
  //   image: img5,
  //   title: "YouTube",
  //   description: "다섯 번째 작품 설명",
  //   path: "/youtube",
  // },
];

const CardGrid = () => {
  return (
    <div className="works-section">
      <h1 className="works-title">WORKS</h1>
      <div className="card-grid">
        {cardData.map((card) => (
          <Link key={card.id} to={card.path} className="card-link">
            <div className="card">
              <div className="card-image">
                <img src={card.image} alt={card.title} />
              </div>
              <h3 className="card-title">{card.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
