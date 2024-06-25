import { useState } from "react";
import Button from "./Button";

interface Props {
  imgUrl: string;
  projectUrl: string;
  codeUrl: string;
  title: string;
  techStack: string[];
  disableDiv?: string;
  repositionButton?: string;
}

function ProjectCard(props: Props) {
  const clickViewProject = () => window.open(props.projectUrl, "_blank");
  const clickViewCode = () => window.open(props.codeUrl, "_blank");

  let [revealDiv, setRevealDiv] = useState(true);

  return (
    <>
      <div
        className="mx-[4.27vw] mb-[10.67vw]
      min-[768px]:w-[43.45vw] min-[768px]:h-auto min-[768px]:mx-0 min-[768px]:mb-[7.81vw]
      min-[1440px]:w-[36.91vw] min-[1440px]:mb-[4.79vw]"
      >
        <div className="min-[1440px]:relative">
          <img
            className="min-[1440px]:hover:cursor-pointer mb-[5.33vw] min-[768px]:mb-[2.6vw] min-[1440px]:mb-[1.39vw]"
            src={props.imgUrl}
            onMouseOver={() =>
              window.innerWidth >= 1440 ? setRevealDiv(false) : null
            }
          ></img>
          <div
            className={
              revealDiv
                ? "!hidden"
                : "min-[1440px]:block min-[1440px]:absolute min-[1440px]:w-full min-[1440px]:h-full min-[1440px]:bg-[black] min-[1440px]:top-0 min-[1440px]:left-0 min-[1440px]:opacity-80 min-[1440px]:z-9"
            }
            onMouseLeave={() =>
              window.innerWidth >= 1440 ? setRevealDiv(true) : null
            }
          ></div>
          <div
            className={
              revealDiv
                ? "!hidden"
                : "min-[1440px]:flex min-[1440px]:flex-col min-[1440px]:items-center min-[1440px]:justify-center min-[1440px]:absolute min-[1440px]:top-[34%] min-[1440px]:left-[40%] min-[1440px]:z-99"
            }
            onMouseOver={() =>
              window.innerWidth >= 1440 ? setRevealDiv(false) : null
            }
            onMouseLeave={() =>
              window.innerWidth >= 1440 ? setRevealDiv(false) : null
            }
          >
            <div
              className={props.disableDiv + " " + "min-[1440px]:mb-[3.33vw]"}
            >
              <Button label="PERŽIŪRĖTI" action={clickViewProject} />
            </div>
            <div className={props.repositionButton}>
              <Button label="KODAS" action={clickViewCode} />
            </div>
          </div>
        </div>
        <h1
          className="text-[6.4vw] leading-[8.53vw] mb-[1.87vw] font-bold
        min-[768px]:text-[3.13vw] min-[768px]:leading-[4.17vw] min-[768px]:mb-[0.91vw]
        min-[1440px]:text-[1.67vw] min-[1440px]:leading-[2.22vw] min-[1440px]:mb-[0.49vw]"
        >
          {props.title}
        </h1>
        <div
          className="flex text-[#D9D9D9] font-medium text-[4.8vw] leading-[7.57vw] mb-[5.33vw]
        min-[768px]:text-[2.334vw] min-[768px]:leading-[3.65vw] min-[768px]:mb-[2.6vw]
        min-[1440px]:text-[1.25vw] min-[1440px]:leading-[1.94vw] min-[1440px]:mb-0"
        >
          {props.techStack.map((item) => (
            <p
              key={item}
              className="mr-[4.8vw] min-[768px]:mr-[2.34vw] min-[1440px]:mr-[1.25vw]"
            >
              {item}
            </p>
          ))}
        </div>
        <div className="flex items-center min-[1440px]:hidden">
          <div
            className={
              props.disableDiv + " " + "mr-[8vw] min-[768px]:mr-[2.34vw]"
            }
          >
            <Button label="PERŽIŪRĖTI" action={clickViewProject} />
          </div>
          <div>
            <Button label="KODAS" action={clickViewCode} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
