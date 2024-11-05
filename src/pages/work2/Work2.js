import React from "react";
import { Link } from "react-router-dom";
import "./Work2.scss";
import Header from "../../components/header/Header";
import projectImg1 from "./img/project1.png";
import projectImg2 from "./img/project2.png";

const publishingData = [
  {
    id: 1,
    image: projectImg1,
    title: "Machbase Neo",
    description: "첫 번째 프로젝트 설명",
    path: "/neo",
  },
  {
    id: 2,
    image: projectImg2,
    title: "쌍용자동차 리뉴얼(그린아카데미)",
    description: "두 번째 프로젝트 설명",
    path: "/ssangyoung",
  },
];

const Work2 = () => {
  return (
    <div className="publishing-page">
      <Header />
      <div className="publishing-section">
        <h2 className="publishing-title">Publishing</h2>
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

export default Work2;
