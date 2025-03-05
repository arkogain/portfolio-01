import { Separator } from "@/components/ui/separator";
import { projectDetailType } from "@/lib/type";
import { CircleArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const ProjectCard = ({ info }: { info: projectDetailType }) => {
  const projectDetail = info;
  return (
    <>
      <div className="flex flex-col-reverse items-center justify-center gap-24 font-jetbrains lg:flex-row">
        {/* desktop left side */}

        <div className="space-y-3">
          <div className="text-6xl font-extrabold">{projectDetail.no}</div>

          <div className="text-3xl font-bold text-default-pink">
            {projectDetail.name}
          </div>
          <div className="text-sm">{projectDetail.description}</div>

          <div className="text-default-pink">{projectDetail.languages}</div>

          <Separator className="mb-2 mt-8 w-60" />

          <div className="flex items-center gap-6">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger value="Github">
                  <Link
                    href={projectDetail.link}
                    className="hover:text-default-pink"
                  >
                    <CircleArrowOutUpRight size={32} />
                  </Link>
                </TooltipTrigger>

                <TooltipContent>View</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger value="Github">
                  <Link
                    href={projectDetail.githubLink}
                    className="hover:text-default-pink"
                  >
                    <FaGithub size={32} />
                  </Link>
                </TooltipTrigger>

                <TooltipContent>Github</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        {/* desktop right side */}

        <Image
          src={projectDetail.image}
          className="h-[250px] w-[330px] rounded-xl shadow-2xl shadow-default-pink"
          alt="Project 01"
          width={330}
          height={250}
        />
      </div>
    </>
  );
};

export default ProjectCard;
