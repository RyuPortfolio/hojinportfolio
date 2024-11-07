import React, { useState, useEffect, useRef } from "react";
import "./InteractiveScroll.scss";
import ryu from "./img/ryu.jpg";
import img1 from "./img/machbase-favicon.png";
import img2 from "./img/emblem_01.png";
import img3 from "./img/hanyang.svg";
import img4 from "./img/hanyang.svg";
import img5 from "./img/ryu.jpg";

const Portfolio = () => {
  return (
    <div className="port">
      <div className="profile-container">
        <img src={ryu} alt="Profile" />
      </div>

      <div className="info-container">
        <section className="career">
          <h2>경력</h2>
          <ul>
            <li>
              <div className="career-header">
                <span>㈜마크베이스</span>
                <span>2022.11 ~ 2023.12</span>
              </div>
              <div className="career-details">
                <p>• 홈페이지 기획, 디자인, 퍼블리싱, 개발</p>
                <p>• SEO, 유튜브 편집</p>
                <p>• 전시회 디자인</p>
                <p className="achievement">
                  • 여러개로 나뉘어 있던 홈페이지를 통합하고 SEO설정을 통하여
                  기존보다 UV 500% 증가
                </p>
              </div>
            </li>
          </ul>
        </section>

        <section className="education">
          <h2>학력</h2>
          <ul>
            <li>
              <span>한양사이버대학교</span>
              <span>컴퓨터공학과 (3학년 편입)</span>
              <span>2024.02 ~</span>
              <span>재학중</span>
            </li>
            <li>
              <span>수원대학교</span>
              <span>중어중문과</span>
              <span>2015.03 ~ 2018.02</span>
              <span>자퇴</span>
            </li>
          </ul>
        </section>

        <section className="certification">
          <h2>수료이력</h2>
          <ul>
            <li>
              <span>UI/UX 반응형 웹디자인 & 웹퍼블리셔</span>
              <span>(그린컴퓨터아카데미)</span>
              <span>2022.07 ~ 2022.11</span>
            </li>
            <li>
              <span>포토샵, 에프터이펙트, 프리미어 프로</span>
              <span>(SBS컴퓨터아트학원)</span>
              <span>2022.02 ~ 2022.06</span>
            </li>
            <li>
              <span>JAVA 웹 개발</span>
              <span>(코리아IT아케데미)</span>
              <span>2024.1 ~ 2024.04</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

const InteractiveScroll = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [showPort, setShowPort] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(-1);
  const yellowDivRef = useRef(null);
  const section1Ref = useRef(null);
  const rafRef = useRef(null);

  const images = [img1, img2, img3, img4, img5];
  const altTexts = [
    "University emblem",
    "Hanyang logo",
    "Green certificate",
    "Machbase logo",
    "Green certificate",
  ];

  useEffect(() => {
    const setSection1Height = () => {
      if (section1Ref.current) {
        section1Ref.current.style.height = `${window.innerHeight * 3.8}px`;
      }
    };

    let targetPosition = { x: 0, y: 0 };
    let currentPosition = { x: 0, y: 0 };
    const ease = 0.15;

    const updatePosition = () => {
      if (!isFixed && yellowDivRef.current) {
        currentPosition.x += (targetPosition.x - currentPosition.x) * ease;
        currentPosition.y += (targetPosition.y - currentPosition.y) * ease;

        setPosition({
          x: currentPosition.x,
          y: currentPosition.y,
        });

        rafRef.current = requestAnimationFrame(updatePosition);
      }
    };

    const handleMouseMove = (e) => {
      if (!isFixed && yellowDivRef.current) {
        targetPosition = {
          x: e.clientX - yellowDivRef.current.offsetWidth / 2,
          y: e.clientY - yellowDivRef.current.offsetHeight / 2,
        };

        if (!rafRef.current) {
          rafRef.current = requestAnimationFrame(updatePosition);
        }
      }
    };

    const handleScroll = () => {
      if (!section1Ref.current || !yellowDivRef.current) return;

      const scrollPercentage =
        window.scrollY /
        (section1Ref.current.offsetHeight - window.innerHeight);

      if (scrollPercentage >= 0.85 && scrollPercentage <= 1) {
        section1Ref.current.style.backgroundColor = "white";
      } else {
        section1Ref.current.style.backgroundColor = "black";
      }

      const baseSize = Math.min(window.innerWidth, window.innerHeight) * 0.15;
      const minSize = 80;
      const maxSize = 150;
      const currentBaseSize = Math.min(Math.max(baseSize, minSize), maxSize);

      if (scrollPercentage < 0.15) {
        setIsFixed(false);
        setScale(1);
        setShowPort(false);
        setCurrentImageIndex(-1);
      } else if (scrollPercentage >= 0.15 && scrollPercentage < 0.75) {
        setIsFixed(true);
        setShowPort(false);

        const scaleProgress = (scrollPercentage - 0.15) / 0.6;
        const maxScale = Math.max(
          window.innerWidth / currentBaseSize,
          window.innerHeight / currentBaseSize
        );
        setScale(1 + (maxScale - 1) * scaleProgress);

        const imageProgress = (scrollPercentage - 0.15) / (0.6 / 5);
        const newIndex = Math.min(Math.floor(imageProgress), 4);
        setCurrentImageIndex(newIndex);
      } else if (scrollPercentage >= 0.75 && scrollPercentage < 0.85) {
        setIsFixed(true);
        setShowPort(false);
        setCurrentImageIndex(4);
        setScale(1);
      } else {
        setIsFixed(false);
        setShowPort(true);
        setScale(1);
      }
    };

    const handleResize = () => {
      setSection1Height();
      handleScroll();
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    setSection1Height();
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isFixed]);

  const getYellowDivStyle = () => {
    if (showPort) {
      return {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "100%",
        transform: "none",
      };
    }

    let style = {};

    style = {
      transform: `translate(-50%, -50%) scale(${scale})`,
      left: isFixed ? "50%" : `${position.x}px`,
      top: isFixed ? "50%" : `${position.y}px`,
      transition: isFixed
        ? "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
        : "none",
    };

    return style;
  };

  const renderContent = () => {
    if (showPort) {
      return <Portfolio />;
    }

    if (currentImageIndex === -1) {
      return <img src={ryu} alt="Profile" className="cursor-image" />;
    }

    return (
      <img
        src={images[currentImageIndex]}
        alt={altTexts[currentImageIndex]}
        className="cursor-image"
      />
    );
  };

  return (
    <div className="section1" ref={section1Ref}>
      <div className="header-content">
        <div className="title-hojin">HOJIN'S</div>
        <div className="title-portfolio">PORTFOLIO</div>
      </div>
      <div
        className={`yellow-div ${isFixed ? "fixed" : ""} ${
          showPort ? "show-port" : ""
        }`}
        ref={yellowDivRef}
        style={getYellowDivStyle()}
      >
        {renderContent()}
      </div>
    </div>
  );
};

export default InteractiveScroll;
