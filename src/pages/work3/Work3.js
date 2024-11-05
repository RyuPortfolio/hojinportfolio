import React from "react";
import { Link } from "react-router-dom";
import "./Work3.scss";
import projectImg1 from "./img/pana3.jpg";
import projectImg2 from "./img/print.png";
import Header from "../../components/header/Header";
const publishingData = [
  {
    id: 1,
    image: projectImg1,
    title: "코엑스 전시회",
    description: "첫 번째 프로젝트 설명",
    path: "/coex",
  },
  {
    id: 2,
    image: projectImg2,
    title: "마크베이스 디자인",
    description: "두 번째 프로젝트 설명",
    path: "/machdesign",
  },
];

const Work3 = () => {
  return (
    <div className="publishing-page">
      <Header />
      <div className="publishing-section">
        <h2 className="publishing-title">Design</h2>
        <div className="publishing-grid">
          {publishingData.map((project) => (
            <Link key={project.id} to={project.path} className="project-link">
              <div className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <h3 className="project-title">{project.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work3;
