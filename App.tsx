import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Button from "./components/Button";
import ProjectCard from "./components/ProjectCard";
import Contact from "./components/Contact";

function App() {
  let techStack = [];
  const clickContact = () => window.scrollTo(0, document.body.scrollHeight);

  return (
    <>
      <div className="text-white box-border">
        <NavBar
          color="bg-[#151515]"
          paddingTop="pt-[5.33vw] min-[768px]:pt-[3.78vw] min-[1440px]:pt-[2.71vw] min-[1440px]:pb-[2.82vw]"
        />
        <HeroSection />
        <div
          className="text-center border-y mx-[4vw] py-[10.67vw] text-[8.53vw] leading-[10.67vw] tracking-[-0.27vw] font-bold [&_h1]:mb-[6.4vw] 
        min-[768px]:flex min-[768px]:flex-wrap min-[768px]:text-left min-[768px]:[&_h1]:w-[44.7vw] min-[768px]:[&_h1]:h-auto 
        min-[768px]:[&_h1]:mb-[6.77vw] min-[768px]:mx-[4.17vw] min-[768px]:pt-[6.77vw] min-[768px]:pb-[13.02vw]
        min-[768px]:font-bold min-[768px]:text-[6.25vw] min-[768px]:leading-[7.29vw] min-[768px]:tracking-[-0.2vw] min-[768px]:border-b-0 
        min-[1440px]:[&_h1]:w-[22.90vw] min-[1440px]:text-[3.33vw] min-[1440px]:leading-[3.89vw] min-[1440px]:tracking-[-0.1vw]
        min-[1440px]:pb-[9.72vw] min-[1440px]:pt-[7.22vw] min-[1440px]:mx-[11.46vw] min-[1440px]:[&_h1]:mr-[2.08vw]
        "
        >
          <h1>HTML</h1>
          <h1>CSS</h1>
          <h1>Tailwind</h1>
          <h1>JavaScript</h1>
          <h1>TypeScript</h1>
          <h1>React</h1>
          <h1>Figma</h1>
          <h1 className="min-[768px]:!m-0">Inkscape</h1>
          <h1 className="!m-0">Photoshop</h1>
        </div>
        <div
          className="flex justify-between items-center mb-[10.67vw] mt-[21.33vw] px-[4.27vw]
        min-[768px]:mb-[7.81vw] min-[768px]:mt-[0vw] min-[768px]:px-[4.17vw]
        min-[1440px]:mb-[5.55vw] min-[1440px]:px-[11.46vw]
        "
        >
          <h1
            className="text-[10.67vw] leading-[10.67vw] tracking-[-0.3vw] font-bold
          min-[768px]:text-[9.34vw] min-[768px]:leading-[9.34vw] min-[768px]:tracking-[-0.27vw]
          min-[1440px]:text-[6.11vw] min-[1440px]:leading-[6.11vw] min-[1440px]:tracking-[-0.17vw]
          "
          >
            Apie
          </h1>
          <Button label="SUSISIEKTI" action={clickContact} />
        </div>
        <div
          className="text-[#D9D9D9] text-[4.27vw] leading-[6.93vw] font-medium text-center border-b mx-[4vw] pb-[10.67vw] tracking-[-0.27vw] mb-[21.33vw] 
        min-[768px]:text-[2.34vw] min-[768px]:leading-[3.65vw] min-[768px]:tracking-normal min-[768px]:border-b-0 min-[768px]:pb-0 min-[768px]:mb-[13.02vw] min-[768px]:mx-[3.91] 
        min-[1440px]:text-[1.25vw] min-[1440px]:leading-[1.94vw] min-[1440px]:mb-[9.72vw] min-[1440px]:mx-[11.46vw] min-[1440px]:max-w-[900px] 
        min-[1440px]:ml-auto min-[1440px]:mr-auto
        "
        >
          <p>
            Esu baigęs Informatikos Inžinerijos studijas, o Front End
            programavimo kryptį pasirinkau dėl to, jog šalia loginio mąstymo
            taip pat turiu ir labai kūrybišką charakterio pusę - laisvalaikiu
            kuriu iliustracijas. Dėl savo meninės pusės įgijau puikias grafinių
            programų, tokių kaip Figma, Inkscape ir Photoshop, žinias. Manau ši
            patirtis gali padėti efektyviau bendradarbiauti su grafikos
            dizaineriais perkeliant grafinį svetainės vaizdą į realų programinį
            kodą.
          </p>
        </div>
        <div
          className="flex justify-between items-center mb-[10.67vw] mt-[21.33vw] px-[4.27vw]
        min-[768px]:mb-[7.81vw] min-[768px]:mt-[0vw] min-[768px]:px-[4.17vw]
        min-[1440px]:mb-[5.55vw] min-[1440px]:px-[11.46vw]"
        >
          <h1
            className="text-[10.67vw] leading-[10.67vw] tracking-[-0.3vw] font-bold
          min-[768px]:text-[9.34vw] min-[768px]:leading-[9.34vw] min-[768px]:tracking-[-0.27vw]
          min-[1440px]:text-[6.11vw] min-[1440px]:leading-[6.11vw] min-[1440px]:tracking-[-0.17vw]"
          >
            Projektai
          </h1>
          <Button label="SUSISIEKTI" action={clickContact} />
        </div>
        <div
          className="mb-[21.33vw]
        min-[768px]:flex min-[768px]:flex-wrap min-[768px]:mb-[5.21vw]
        min-[1440px]:mx-[9.38vw]
        "
        >
          <div className="min-[768px]:ml-[3.91vw] min-[768px]:mr-[3.13vw] min-[1440px]:mx-[2.08vw]">
            <ProjectCard
              imgUrl="../../assets/images/project5.png"
              projectUrl="https://dariusmolotokas.lt/"
              codeUrl="https://github.com/dariusmit/my_dev_portfolio"
              title="PORTFOLIO SVETAINĖ"
              techStack={(techStack = ["React", "TypeScript", "Tailwind"])}
              disableDiv="hidden"
              repositionButton="min-[1440px]:mt-[55px] min-[1440px]:ml-[30px]"
            />
          </div>
          <div className="min-[768px]:mr-[3.91vw] min-[1440px]:mr-[2.08vw]">
            <ProjectCard
              imgUrl="../../assets/images/project1.png"
              projectUrl="https://dariusmolotokas.lt/art_gallery/"
              codeUrl="https://github.com/dariusmit/art_gallery"
              title="MENO GALERIJOS SVETAINĖ"
              techStack={(techStack = ["HTML", "CSS", "Leaflet.js"])}
            />
          </div>
          <div className="min-[768px]:ml-[3.91vw] min-[768px]:mr-[3.13vw] min-[1440px]:mx-[2.08vw]">
            <ProjectCard
              imgUrl="../../assets/images/project2.png"
              projectUrl="https://dariusmolotokas.lt/scooter_rental/"
              codeUrl="https://github.com/dariusmit/scooter_rental"
              title="PASPIRTUKŲ NUOMOS SVETAINĖ"
              techStack={(techStack = ["HTML", "CSS"])}
            />
          </div>
          <div className="min-[768px]:mr-[3.91vw] min-[1440px]:mr-[2.08vw]">
            <ProjectCard
              imgUrl="../../assets/images/project3.png"
              projectUrl="https://dariusmolotokas.lt/crowdfunding_page/"
              codeUrl="https://github.com/dariusmit/crowdfunding_page"
              title="SUTELKTINIO FINANSAVIMO SVETAINĖ"
              techStack={(techStack = ["HTML", "CSS", "JavaScript"])}
            />
          </div>
          <div className="min-[768px]:ml-[3.91vw] min-[768px]:mr-[3.13vw] min-[1440px]:mx-[2.08vw]">
            <ProjectCard
              imgUrl="../../assets/images/project4.png"
              projectUrl="https://dariusmolotokas.lt/sunnyside/"
              codeUrl="https://github.com/dariusmit/sunnyside_agency"
              title="AGENTŪROS PAGRINDINIS PUSLAPIS"
              techStack={(techStack = ["HTML", "CSS"])}
            />
          </div>
        </div>
        <Contact />
        <NavBar
          color="bg-[#242424]"
          paddingTop="pt-[5.33vw] min-[768px]:pt-[3.78vw] min-[1440px]:pt-[2.71vw]"
        />
      </div>
    </>
  );
}

export default App;
