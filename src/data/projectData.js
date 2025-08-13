import Img1 from "../assets/projectimages/reactrecipeapp.png"
import Img2 from "../assets/projectimages/reactmovieapp.png"
import Img3 from "../assets/projectimages/fullstackuber.png"
import Img4 from "../assets/projectimages/reactochiclone.png"
import Img5 from "../assets/projectimages/mywebpage.png"
import Img6 from "../assets/projectimages/unsplashbackend.png"

const projectData = [{
    id: 1,
    projectName: "Food recipe App",
    description: "A simple app to browse, search, and save your favorite recipes and browse a variety of recipes Search by ingredients or recipe name Save and manage your favorite recipes",
    projectImg: Img1,
    techStack: [
        "tailwindcss",
        "react.js",
        "react - loading - indicators",
        "react - router - dom",
        "react - toastify",
    ],
    projectLink: "https://food-recipe-online.netlify.app/"
}, {
    id: 2,
    projectName: "Moviefix",
    description: "Moviefix is a modern, responsive web application for movie lovers to discover, search, and manage their favorite films. You can add the movie in whatchlist and also able to remove it.",
    projectImg: Img2,
    techStack: [
        "tailwindcss",
        "axios",
        "react.js",
        "react - router - dom",
        "react-spinners",
        "slick-carousel",
    ],
    projectLink: "https://movifixonlime.netlify.app/"
}, {
    id: 3,
    projectName: "Uber App",
    description: "Uber is fullstack project where user can login or singup. It has the static user and captain dashbord.",
    projectImg: Img3,
    techStack: [
        "tailwindcss",
        "axios",
        "react.js",
        "react - router - dom",
        "motion",
        "slick-carousel",
        "express.js",
        "dotenv",
        "bcrypt",
        "cookie-parser",
        "mongoose",
        "jwt"

    ],
    projectLink: ""
}, {
    id: 4,
    projectName: "React Ochi Clone",
    description: "It is the clone app of Ochi built in react. In this app we have the smoth-scrolling with the help of locomotive and cool animations using framer motion and gsap.",
    projectImg: Img4,
    techStack: [
        "tailwindcss",
        "react.js",
        "react - router - dom",
        "locomotive-scroll",
        "motion",
        "gsap"
    ],
    projectLink: "https://ochi-clone-kiran.netlify.app/"
}, {
    id: 5,
    projectName: "My Web Page",
    description: "It is the static, multipage website built in html, css and js. Where user can see famouse nepal palces and save by clicking on the heart button and also able to delete it.",
    projectImg: Img5,
    techStack: [
        "html",
        "css",
        "js",

    ],
    projectLink: "https://kiran-limbu.github.io/my-web-page/"
}, {
    id: 6,
    projectName: "Unsplash Backend Project",
    description: "This is a Node.js backend application inspired by Unsplash, It allows users to register, log in, upload profile images, create posts with images, and view a feed of uploaded posts.",
    projectImg: Img6,
    techStack: [
        "express.js",
        "node.js",
        "ejs",
        "mongoose",
        "multer",
        "passport",
        "passport-local",
        "passport-local-mongoose",
        "tailwindcss",
        "uuid"

    ],
    projectLink: "https://backen-proj-1.onrender.com"
}];

export default projectData;