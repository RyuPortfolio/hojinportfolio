import React, { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import "./PhysicsEllipse.scss";

const defaultItems = [
  {
    id: 1,
    title: "학습의지",
    detail: `항상&nbsp;<span class="highlight">배우고 성장</span>하는 인재`,
  },
  {
    id: 2,
    title: "성실함",
    detail: `<span class="highlight">&nbsp;성실한</span>태도로 나아가는 인재`,
  },
  {
    id: 3,
    title: "도전정신",
    detail: `새로운 <span class="highlight">&nbsp;도전</span>을 주저하지 않는 인재`,
  },
  {
    id: 4,
    title: "꾸준함",
    detail: `한결같은<span class="highlight">&nbsp;꾸준함</span>으로 발전하는 인재`,
  },
  {
    id: 5,
    title: "책임감",
    detail: `맡은 바<span class="highlight">&nbsp;책임</span>을 다하는 인재`,
  },
  {
    id: 6,
    title: "소통",
    detail: `경청하며<span class="highlight">&nbsp;소통</span>하는 인재`,
  },
  {
    id: 7,
    title: "창의력",
    detail: `고정관념에 얽매이지 않는 <span class="highlight">&nbsp;창의적인</span> 인재`,
  },
  {
    id: 8,
    title: "실행력",
    detail: `바로 실천하는<span class="highlight">&nbsp;실행력</span>있는 인재`,
  },
];

const defaultMessage = `키워드 <span class="highlight">드레그 !</span>`;

const PhysicsContainer = ({ items = defaultItems, onItemClick }) => {
  const sceneRef = useRef(null);
  const engineRef = useRef(null);
  const runnerRef = useRef(null);
  const [selectedText, setSelectedText] = useState(defaultMessage);

  useEffect(() => {
    const {
      Engine,
      Render,
      Runner,
      Bodies,
      Composite,
      Mouse,
      MouseConstraint,
      Events,
    } = Matter;

    engineRef.current = Engine.create({
      gravity: { x: 0, y: 1, scale: 0.001 },
    });

    const containerWidth = window.innerWidth;
    const containerHeight = 860;

    const render = Render.create({
      element: sceneRef.current,
      engine: engineRef.current,
      options: {
        width: containerWidth,
        height: containerHeight,
        wireframes: false,
        background: "#000000",
      },
    });

    const walls = [
      Bodies.rectangle(containerWidth / 2, -30, containerWidth, 60, {
        isStatic: true,
        render: { fillStyle: "#000000" },
      }),
      Bodies.rectangle(
        containerWidth / 2,
        containerHeight + 30,
        containerWidth,
        60,
        {
          isStatic: true,
          render: { fillStyle: "#000000" },
        }
      ),
      Bodies.rectangle(-30, containerHeight / 2, 60, containerHeight, {
        isStatic: true,
        render: { fillStyle: "#000000" },
      }),
      Bodies.rectangle(
        containerWidth + 30,
        containerHeight / 2,
        60,
        containerHeight,
        {
          isStatic: true,
          render: { fillStyle: "#000000" },
        }
      ),
    ];

    const ellipses = items.map((item, i) => {
      const x = 200 + (i % 4) * 250;
      const y = 100 + Math.floor(i / 4) * 150;
      return Bodies.rectangle(x, y, 120, 60, {
        chamfer: { radius: 30 },
        render: {
          fillStyle: "transparent",
          strokeStyle: "#ffffff",
          lineWidth: 1,
        },
        label: item.title,
        id: item.id,
        density: 0.1,
        mass: 50,
        friction: 0.8,
        frictionAir: 0.05,
        restitution: 0.1,
        inertia: Infinity,
      });
    });

    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engineRef.current, {
      mouse: mouse,
      constraint: {
        stiffness: 0.05,
        damping: 0.1,
        render: { visible: false },
      },
    });

    Events.on(mouseConstraint, "mousedown", (event) => {
      const clickedBody = event.source.body;
      if (clickedBody && clickedBody.id) {
        const clickedItem = items.find((item) => item.id === clickedBody.id);
        if (clickedItem) {
          setSelectedText(clickedItem.detail);
          if (onItemClick) {
            onItemClick(clickedItem);
          }
        }
      }
    });

    render.canvas.addEventListener("wheel", (e) => {
      e.stopPropagation();
      window.scrollBy({
        top: e.deltaY,
        behavior: "auto",
      });
    });

    Events.on(render, "afterRender", () => {
      const context = render.context;
      context.font = "20px Arial";
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.fillStyle = "#ffffff";

      ellipses.forEach((ellipse) => {
        const { x, y } = ellipse.position;
        context.save();
        context.translate(x, y);
        context.rotate(ellipse.angle);
        context.fillText(ellipse.label, 0, 0);
        context.restore();
      });
    });

    const handleOutsideClick = (e) => {
      if (!render.canvas.contains(e.target)) {
        setSelectedText(defaultMessage);
      }
    };
    document.addEventListener("click", handleOutsideClick);

    Composite.add(engineRef.current.world, [
      ...walls,
      ...ellipses,
      mouseConstraint,
    ]);

    runnerRef.current = Runner.create();
    Runner.run(runnerRef.current, engineRef.current);
    Render.run(render);

    const handleResize = () => {
      render.canvas.width = window.innerWidth;
      render.canvas.height = 860;
      Matter.Render.setPixelRatio(render, window.devicePixelRatio);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", handleOutsideClick);
      render.canvas.remove();
      Render.stop(render);
      if (runnerRef.current) {
        Runner.stop(runnerRef.current);
      }
      if (engineRef.current) {
        Engine.clear(engineRef.current);
      }
      render.canvas = null;
      render.context = null;
    };
  }, [items, onItemClick]);

  return (
    <>
      <div
        className="detail-text"
        dangerouslySetInnerHTML={{ __html: selectedText }}
      />
      <div ref={sceneRef} className="physics-container" />
    </>
  );
};

export default PhysicsContainer;
