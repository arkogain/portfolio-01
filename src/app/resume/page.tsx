import AboutTab from "@/components/ResumeComps/AboutTab";
import EducationTab from "@/components/ResumeComps/EducationTab";
import SkillsTab from "@/components/ResumeComps/SkillsTab";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const page = () => {
  return (
    <>
      <section className="min-h-[90dvh] lg:py-20">
        <Tabs
          defaultValue="education"
          className="flex flex-col gap-10 lg:flex-row lg:gap-20"
        >
          <TabsList className="flex h-full flex-col justify-start gap-3 bg-transparent font-jetbrains">
            {/* <TabsTrigger
              className="w-64 rounded-lg bg-foreground/5 py-3 text-lg data-[state=active]:bg-default-pink data-[state=active]:text-white"
              value="exprience"
            >
              Expirence
            </TabsTrigger> */}
            <TabsTrigger
              className="w-64 rounded-lg bg-foreground/5 py-3 text-lg data-[state=active]:bg-default-pink data-[state=active]:text-white"
              value="education"
            >
              Education
            </TabsTrigger>

            <TabsTrigger
              className="w-64 rounded-lg bg-foreground/5 py-3 text-lg data-[state=active]:bg-default-pink data-[state=active]:text-white"
              value="skills"
            >
              Skills
            </TabsTrigger>

            <TabsTrigger
              className="w-64 rounded-lg bg-foreground/5 py-3 text-lg data-[state=active]:bg-default-pink data-[state=active]:text-white"
              value="about-me"
            >
              About Me
            </TabsTrigger>
          </TabsList>

          {/* content start */}

          {/* <TabsContent
            className=""
            value="exprience"
          >
            Exprience
          </TabsContent> */}

          {/* education Tab */}

          <TabsContent
            className="text-center font-jetbrains lg:text-start"
            value="education"
          >
            <EducationTab />
          </TabsContent>

          {/* Skills Tab */}

          <TabsContent
            className="text-center font-jetbrains lg:text-start"
            value="skills"
          >
            <SkillsTab />
          </TabsContent>

          <TabsContent
            className="text-center font-jetbrains lg:text-start"
            value="about-me"
          >
            <AboutTab />
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
};

export default page;
