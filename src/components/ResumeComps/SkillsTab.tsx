import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

import {
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiBun, SiTypescript } from "react-icons/si";

const SkillsTab = () => {
  return (
    <>
      <div className="text-4xl font-bold text-default-pink">My Skills</div>
      <div className="mt-4 text-foreground/50">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, cumque!
      </div>
      <div className="mt-4 text-wrap text-2xl font-semibold">
        Professional <span className="text-default-pink">Skillset</span>
      </div>
      <div className="mt-5 grid grid-cols-3 place-items-center gap-5 lg:grid-cols-5">
        <TooltipProvider>
          {/* html */}
          <Tooltip>
            <TooltipTrigger
              value="react"
              className="rounded-xl border-2 border-foreground/50 p-3"
            >
              <FaHtml5 size={64} />
            </TooltipTrigger>

            <TooltipContent>HTML5</TooltipContent>
          </Tooltip>

          {/* css */}
          <Tooltip>
            <TooltipTrigger
              value="react"
              className="rounded-xl border-2 border-foreground/50 p-3"
            >
              <FaCss3 size={64} />
            </TooltipTrigger>

            <TooltipContent>CSS3</TooltipContent>
          </Tooltip>

          {/* bootstrap */}
          <Tooltip>
            <TooltipTrigger
              value="react"
              className="rounded-xl border-2 border-foreground/50 p-3"
            >
              <FaBootstrap size={64} />
            </TooltipTrigger>

            <TooltipContent>Bootstrap</TooltipContent>
          </Tooltip>

          {/* JS */}
          <Tooltip>
            <TooltipTrigger
              value="react"
              className="rounded-xl border-2 border-foreground/50 p-3"
            >
              <FaJs size={64} />
            </TooltipTrigger>

            <TooltipContent>JavaScript</TooltipContent>
          </Tooltip>

          {/* nodeJs */}
          <Tooltip>
            <TooltipTrigger
              value="react"
              className="rounded-xl border-2 border-foreground/50 p-3"
            >
              <FaNodeJs size={64} />
            </TooltipTrigger>

            <TooltipContent>Node JS</TooltipContent>
          </Tooltip>

          {/* React */}
          <Tooltip>
            <TooltipTrigger
              value="react"
              className="rounded-xl border-2 border-foreground/50 p-3"
            >
              <FaReact size={64} />
            </TooltipTrigger>

            <TooltipContent>React</TooltipContent>
          </Tooltip>

          {/* nextjs */}
          <Tooltip>
            <TooltipTrigger
              value="react"
              className="rounded-xl border-2 border-foreground/50 p-3"
            >
              <RiNextjsFill size={64} />
            </TooltipTrigger>

            <TooltipContent>Next JS</TooltipContent>
          </Tooltip>

          {/* bun */}
          <Tooltip>
            <TooltipTrigger
              value="react"
              className="rounded-xl border-2 border-foreground/50 p-3"
            >
              <SiBun size={64} />
            </TooltipTrigger>

            <TooltipContent>BUN</TooltipContent>
          </Tooltip>

          {/* /tailwind */}
          <Tooltip>
            <TooltipTrigger
              value="react"
              className="rounded-xl border-2 border-foreground/50 p-3"
            >
              <RiTailwindCssFill size={64} />
            </TooltipTrigger>

            <TooltipContent>Tailwind CSS</TooltipContent>
          </Tooltip>

          {/* typeScript */}
          <Tooltip>
            <TooltipTrigger
              value="react"
              className="rounded-xl border-2 border-foreground/50 p-3"
            >
              <SiTypescript size={64} />
            </TooltipTrigger>

            <TooltipContent>TypeScript</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </>
  );
};

export default SkillsTab;
