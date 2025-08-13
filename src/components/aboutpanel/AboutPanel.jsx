import { useContext } from "react";
import { GlobaleContex } from "../../Contex/GlobaleContex";
import { GrClose } from "react-icons/gr";
import { AnimatePresence, motion } from "motion/react";
import SkillPanel from "../skillpanel/SkillPanel";
import bgImg from "../../assets/images/projectforimg.png"
const AboutPanel = () => {
  const { aboutPanel, setAboutPanel } = useContext(GlobaleContex);
  return (
    <div className="w-full">
      <AnimatePresence>
        {aboutPanel && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "-1%" }}
            transition={{ ease: [0.16, 1, 0.3, 1], duration: 2 }}
            exit={{ y: "100%" }}
            className="bg-zinc-800 fixed top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2  w-[90vw] my-5 rounded-md h-full z-[999]"
          >
              <div className="flex items-end justify-end">
                <button
                  onClick={() => setAboutPanel(false)}
                  className=" text-2xl px-3 py-4 cursor-pointer "
                >
                  <GrClose />
                </button>
              </div>
            <div className="px-5 w-full flex items-center">
              <div className="md:w-1/2 w-full"> 
                <h1 className="font-bold text-2xl text-sky-600">
                  About Me
                </h1>
                <p className="pt-9 text-md text-white font-semibold">
                  I am , beginner web developer with a growing skill set
                  in the MERN stack. Passionate about building clean,
                  responsive, and functional websites. Eager to learn new
                  technologies, solve real-world problems, and contribute to
                  impactful projects.
                </p>
              <div className="Skill-Panel">
              <SkillPanel />
              </div>
              </div>
              <div className="hidden w-1/2 md:flex items-end justify-end">
              <img src={bgImg} alt="" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AboutPanel;
