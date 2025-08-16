import bgImg from "../assets/images/laptoppng.jpg";
import projectData from "../data/projectData"

const ProjectDetailsPage = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="flex items-center justify-center py-7">
        <h1 className="text-5xl font-bold text-zinc-900 border-b-[5px] border-zinc-800">My Projects </h1>
      </div>
      <div className="main">
        {
          projectData.map((data) =>(
        <div 
        key={data.id}
        className="cards w-full flex  md:flex-row flex-col items-center gap-5 text-zinc-800  border-b-[2px] border-zinc-800">
          <div className="img md:w-1/2 w-full relative">
            <a href={data.projectLink} target="_blank">
              <div className="hover:opacity-98">
              <img
                className="absolute top-[17%] left-[21%] w-[58%] h-[58%] object-cover rounded-md"
                src={data.projectImg}
                alt="Website Screenshot"
              />
              <img className="w-full h-auto" src={bgImg} alt="Laptop" />
                </div>
            </a>
          </div>
          <div className="info md:w-1/2 w-full flex flex-col gap-5 px-4 py-5">
            <h2 className="text-3xl font-semibold text-blue-950">
              {data.projectName}
            </h2>
            <p className="font-medium text-lg">
              {data.description}
            </p>
            <div className="flex flex-wrap gap-3 pt-5 text-md text-white w-full">
              {data.techStack.map((items) =>(
                <div 
                key={items}
                className="px-5 py-2 bg-zinc-200 text-zinc-800 border-[1px] border-zinc-400 rounded-full">
                <span>#{items}</span>
              </div>
              ))}
            </div>
          </div>
          
        </div>
          ))
        }
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
