import ProjectCard from "@/components/ProjectCard";
import { projectDetails } from "@/lib/information";

const page = () => {
  return (
    <>
      <section className="space-y-24 py-0 lg:space-y-32 lg:py-20">
        {projectDetails.map((projectDetail) => {
          return (
            <ProjectCard
              key={projectDetail.id}
              info={projectDetail}
            />
          );
        })}
      </section>
    </>
  );
};

export default page;
