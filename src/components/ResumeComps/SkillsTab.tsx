import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

import {
  FaBootstrap,
  FaCss3,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaNpm,
  FaReact,
  FaWindows,
} from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill, RiVercelFill } from "react-icons/ri";
import {
  SiBun,
  SiNextui,
  SiShadcnui,
  SiSwiper,
  SiTypescript,
} from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";

const SkillsTab = () => {
  return (
    <>
      <div className="text-4xl font-bold text-default-pink dark:text-foreground">
        My Skills
      </div>

      <div className="mt-4 text-foreground/50">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, cumque!
      </div>

      <div className="mt-4 text-wrap text-2xl font-semibold">
        Professional <span className="text-default-pink">Skillset</span>
      </div>

      <div className="mt-5 grid grid-cols-3 place-items-center gap-5 text-foreground/80 lg:grid-cols-5">
        <TooltipProvider>
          {/* html */}
          <Tooltip>
            <TooltipTrigger
              value="react"
              className="rounded-xl border-2 border-default-pink p-3 dark:border-foreground/50"
            >
              <FaHtml5 size={64} />
            </TooltipTrigger>

            <TooltipContent>HTML5</TooltipContent>
          </Tooltip>

          {/* css */}
          <Tooltip>
            <TooltipTrigger
              value="react"
              className="rounded-xl border-2 border-default-pink p-3 dark:border-foreground/50"
            >
              <FaCss3 size={64} />
            </TooltipTrigger>

            <TooltipContent>CSS3</TooltipContent>
          </Tooltip>

          {/* bootstrap */}
          <Tooltip>
            <TooltipTrigger
              value="react"
              className="rounded-xl border-2 border-default-pink p-3 dark:border-foreground/50"
            >
              <FaBootstrap size={64} />
            </TooltipTrigger>

            <TooltipContent>Bootstrap</TooltipContent>
          </Tooltip>

          {/* JS */}
          <Tooltip>
            <TooltipTrigger
              value="react"
              className="rounded-xl border-2 border-default-pink p-3 dark:border-foreground/50"
            >
              <FaJs size={64} />
            </TooltipTrigger>

            <TooltipContent>JavaScript</TooltipContent>
          </Tooltip>

          {/* nodeJs */}
          <Tooltip>
            <TooltipTrigger
              value="react"
              className="rounded-xl border-2 border-default-pink p-3 dark:border-foreground/50"
            >
              <FaNodeJs size={64} />
            </TooltipTrigger>

            <TooltipContent>Node JS</TooltipContent>
          </Tooltip>

          {/* React */}
          <Tooltip>
            <TooltipTrigger
              value="react"
              className="rounded-xl border-2 border-default-pink p-3 dark:border-foreground/50"
            >
              <FaReact size={64} />
            </TooltipTrigger>

            <TooltipContent>React</TooltipContent>
          </Tooltip>

          {/* nextjs */}
          <Tooltip>
            <TooltipTrigger
              value="react"
              className="rounded-xl border-2 border-default-pink p-3 dark:border-foreground/50"
            >
              <RiNextjsFill size={64} />
            </TooltipTrigger>

            <TooltipContent>Next JS</TooltipContent>
          </Tooltip>

          {/* bun */}
          <Tooltip>
            <TooltipTrigger
              value="react"
              className="rounded-xl border-2 border-default-pink p-3 dark:border-foreground/50"
            >
              <SiBun size={64} />
            </TooltipTrigger>

            <TooltipContent>BUN</TooltipContent>
          </Tooltip>

          {/* /tailwind */}
          <Tooltip>
            <TooltipTrigger
              value="react"
              className="rounded-xl border-2 border-default-pink p-3 dark:border-foreground/50"
            >
              <RiTailwindCssFill size={64} />
            </TooltipTrigger>

            <TooltipContent>Tailwind CSS</TooltipContent>
          </Tooltip>

          {/* typeScript */}
          <Tooltip>
            <TooltipTrigger
              value="react"
              className="rounded-xl border-2 border-default-pink p-3 dark:border-foreground/50"
            >
              <SiTypescript size={64} />
            </TooltipTrigger>

            <TooltipContent>TypeScript</TooltipContent>
          </Tooltip>

          {/* shadcn ui */}
          <Tooltip>
            <TooltipTrigger
              value="react"
              className="rounded-xl border-2 border-default-pink p-3 dark:border-foreground/50"
            >
              <SiShadcnui size={64} />
            </TooltipTrigger>

            <TooltipContent>ShadcnUI</TooltipContent>
          </Tooltip>

          {/* nextui */}
          <Tooltip>
            <TooltipTrigger
              value="react"
              className="rounded-xl border-2 border-default-pink p-3 dark:border-foreground/50"
            >
              <SiNextui size={64} />
            </TooltipTrigger>

            <TooltipContent>NextUI</TooltipContent>
          </Tooltip>

          {/* npm  */}
          <Tooltip>
            <TooltipTrigger
              value="react"
              className="rounded-xl border-2 border-default-pink p-3 dark:border-foreground/50"
            >
              <FaNpm size={64} />
            </TooltipTrigger>

            <TooltipContent>npm</TooltipContent>
          </Tooltip>

          {/* git */}
          <Tooltip>
            <TooltipTrigger
              value="react"
              className="rounded-xl border-2 border-default-pink p-3 dark:border-foreground/50"
            >
              <FaGitAlt size={64} />
            </TooltipTrigger>

            <TooltipContent>git</TooltipContent>
          </Tooltip>

          {/* swiper */}
          <Tooltip>
            <TooltipTrigger
              value="react"
              className="rounded-xl border-2 border-default-pink p-3 dark:border-foreground/50"
            >
              <SiSwiper size={64} />
            </TooltipTrigger>

            <TooltipContent>Swiper JS</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <div className="mt-5 text-wrap text-2xl font-semibold text-default-pink">
        Tools <span className="text-foreground">I Use</span>
      </div>

      <div className="mt-5 grid grid-cols-3 place-items-center gap-5 text-foreground/80 lg:grid-cols-5">
        <TooltipProvider>
          {/* Windows */}
          <Tooltip>
            <TooltipTrigger
              value="react"
              className="rounded-xl border-2 border-default-pink p-3 dark:border-foreground/50"
            >
              <FaWindows size={64} />
            </TooltipTrigger>

            <TooltipContent>Windows</TooltipContent>
          </Tooltip>

          {/* vs code */}
          <Tooltip>
            <TooltipTrigger
              value="react"
              className="rounded-xl border-2 border-default-pink p-3 dark:border-foreground/50"
            >
              <VscVscodeInsiders size={64} />
            </TooltipTrigger>

            <TooltipContent>VS Code</TooltipContent>
          </Tooltip>

          {/* vercel */}
          <Tooltip>
            <TooltipTrigger
              value="react"
              className="rounded-xl border-2 border-default-pink p-3 dark:border-foreground/50"
            >
              <RiVercelFill size={64} />
            </TooltipTrigger>

            <TooltipContent>Vercel</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </>
  );
};

export default SkillsTab;
