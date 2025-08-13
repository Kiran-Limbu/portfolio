import { useContext } from "react";
import Ballpit from "../components/Ballpit/ballpit";
import { IoMdPerson } from "react-icons/io";
import { GlobaleContex } from "../Contex/GlobaleContex";
import AboutPanel from "../components/aboutpanel/AboutPanel";
import LandingPageMedia from "../components/mediapanel/LandingPageMedia";

const LandingPage = () => {
  const { setAboutPanel } = useContext(GlobaleContex);
  return (
    <div className="w-full h-full bg-[#060010] relative ">
      <div className="relative overflow-hidden">
        <Ballpit
          count={100}
          gravity={0.3}
          friction={1}
          wallBounce={1}
          followCursor={true}
          colors={["#ff4d4d", "#4dff4d", "#4dd2ff", "#ffd24d", "#d24dff"]}
          size0={0.4}
        />
      </div>
      <div className="absolute z-10 top-[26vh] left-[11vw] ">
        <div className="text-white w-full flex flex-col gap-5">
          <div className="font-bold md:text-6xl text-4xl pb-5 tracking-tight">
            Kiran Limbu
          </div>
          <p className="custon-font font-semibold">MERN Stack Developer</p>
          <div className="mt-5">
            <button
              onClick={() => setAboutPanel(true)}
              className="px-5 py-3 bg-zinc-700 font-semibold rounded-md cursor-pointer hover:opacity-90 flex items-center gap-3 text-md"
            >
              About Me <IoMdPerson />
            </button>
          </div>
        </div>
      </div>
      <div className="About-Panel">
        <AboutPanel />
      </div>
      <div className="Media-Panel">
        <LandingPageMedia />
      </div>
    </div>
  );
};

export default LandingPage;
