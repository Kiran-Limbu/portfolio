import mongodb from "../../assets/images/mongodb.png";
import express from "../../assets/images/express.png";
import react from "../../assets/images/react.png";
import node from "../../assets/images/node.webp";
import styled from "styled-components";

const Tooltip = () => {
  const techData = [
  { img: mongodb, name: "MongoDB", color: "#4DB33D", heading: "M" },
  { img: express, name: "Express", color: "#000000", heading: "E" },
  { img: react, name: "React", color: "#61DBFB", heading: "R" },
  { img: node, name: "Node.js", color: "#68A063", heading: "N" },
];


  return (
    <StyledWrapper>
      <div className="mern-container">
        {techData.map((tech, idx) => (
          <div
            key={idx}
            className="mern-item"
            style={{ "--tooltip-color": tech.color, "--text-color": tech.color }}
          >
            <img src={tech.img} alt={tech.name} />
            <span className="tooltip">{tech.name}</span>
            <p className="tech-text">{tech.heading}</p>
          </div>
        ))}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .mern-container {
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: flex-start;
    margin-top: 30px;
  }

  .mern-item {
    width: 90px;
    height: 120px; /* increased height to fit text */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    position: relative;
  }

  .mern-item img {
    width: 70%;
    height: 70%;
    object-fit: contain;
  }

  /* Large bottom text */
  .tech-text {
    margin-top: auto; /* pushes it to the bottom */
    font-size: 1.875rem; /* Tailwind's text-3xl size */
    font-weight: semibold;
    color: var(--text-color);
    text-align: center;
  }

  /* Tooltip */
  .tooltip {
    position: absolute;
    top: -20px;
    opacity: 0;
    background-color: var(--tooltip-color);
    color: white;
    padding: 5px 19px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition-duration: 0.3s;
    pointer-events: none;
    letter-spacing: 0.5px;
    white-space: nowrap;
    font-size: 0.85rem;
  }

  .tooltip::before {
    position: absolute;
    content: "";
    width: 10px;
    height: 10px;
    background-color: var(--tooltip-color);
    transform: rotate(45deg);
    bottom: -15%;
  }

  .mern-item:hover .tooltip {
    top: -40px;
    opacity: 1;
  }
`;

export default Tooltip;
