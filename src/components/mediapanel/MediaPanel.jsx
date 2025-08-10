import styled from "styled-components";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const MediaPanel = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="background"></div>
        <div className="logo">Media</div>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="box box1"
        >
          <span className="icon">
            <FaLinkedin className="svg" />
          </span>
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="box box2"
        >
          <span className="icon">
            <FaFacebook className="svg" />
          </span>
        </a>

        {/* Gmail */}
        <a
          href="mailto:example@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="box box3"
        >
          <span className="icon">
            <SiGmail className="svg" />
          </span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="box box4"
        >
          <span className="icon">
            <FaGithub className="svg" />
          </span>
        </a>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 200px;
    height: 200px;
    background: lightgrey;
    border-radius: 30px;
    overflow: hidden;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: all 1s ease-in-out;
    border: 2px solid rgb(255, 255, 255);
  }

  .background {
    position: absolute;
    inset: 0;
    background-color: #4158d0;
    background-image: linear-gradient(
      43deg,
      #4158d0 0%,
      #c850c0 46%,
      #ffcc70 100%
    );
  }

  .logo {
    position: absolute;
    right: 50%;
    bottom: 50%;
    transform: translate(50%, 50%);
    transition: all 0.6s ease-in-out;
    font-size: 1.3em;
    font-weight: 600;
    color: #ffffff;
    letter-spacing: 3px;
    text-decoration: underline;
  }

  .icon {
    display: inline-block;
    width: 20px;
    height: 20px;
  }

  .svg {
    fill: rgba(255, 255, 255, 0.797);
    width: 100%;
    height: 100%;
    transition: all 0.5s ease-in-out;
  }

  .box {
    position: absolute;
    padding: 10px;
    text-align: right;
    background: rgba(255, 255, 255, 0.389);
    border-top: 2px solid rgb(255, 255, 255);
    border-right: 1px solid white;
    border-radius: 10% 13% 42% 0% / 10% 12% 75% 0%;
    box-shadow: rgba(100, 100, 111, 0.364) -7px 7px 29px 0px;
    transform-origin: bottom left;
    transition: all 1s ease-in-out;
  }

  .box:hover .svg {
    fill: white;
    filter: drop-shadow(0 0 5px white);
  }

  .box1 {
    width: 70%;
    height: 70%;
    bottom: -70%;
    left: -70%;
  }

  .box1:hover {
    background: #0077b5; /* LinkedIn color */
  }

  .box2 {
    width: 50%;
    height: 50%;
    bottom: -50%;
    left: -50%;
    transition-delay: 0.2s;
  }

  .box2:hover {
    background: #1877f2; /* Facebook color */
  }

  .box3 {
    width: 30%;
    height: 39%;
    bottom: -30%;
    left: -30%;
    transition-delay: 0.4s;
  }

  .box3:hover {
    background: #d14836; /* Gmail color */
  }

  .box4 {
   width: 20%;
  height: 20%;
  bottom: -20%;
  left: -20%;
  transition-delay: 0.6s;
  }

  .box4:hover {
    background: #333; /* GitHub color */
  }

  .card:hover {
    transform: scale(1.1);
  }

  .card:hover .box {
    bottom: -1px;
    left: -1px;
  }

  .card:hover .logo {
    transform: translate(70px, -52px);
    letter-spacing: 0px;
  }
`;

export default MediaPanel;
