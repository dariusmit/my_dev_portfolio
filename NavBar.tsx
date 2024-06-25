interface Props {
  color: string;
  paddingTop: string;
}

function NavBar(props: Props) {
  return (
    <>
      <div
        className={
          props.color +
          " " +
          props.paddingTop +
          " " +
          "flex flex-col justify-center items-center pb-[5.33vw] min-[768px]:flex-row min-[768px]:justify-between min-[768px]:px-[3.78vw] min-[768px]:w-full min-[1440px]:px-[11.46vw]"
        }
      >
        <p
          className="text-[6.4vw] leading-[8.53vw] tracking-[-0.09vw] font-bold mb-[5.33vw] 
          min-[768px]:text-[4.17vw] min-[768px]:leading-[4.17vw] min-[768px]:tracking-[-0.06vw] min-[768px]:mb-0 
          min-[1440px]:text-[2.22vw] min-[1440px]:leading-[2.22vw] min-[1440px]:tracking-[-0.03vw]"
        >
          dariusmolotokas
        </p>
        <div className="flex">
          <a
            className="mr-[6.93vw] min-[768px]:mr-[4.17vw] min-[1440px]:mr-[2.22vw]"
            href="https://github.com/dariusmit"
            target="_blank"
          >
            <img
              src="../../assets/images/icon-github.svg"
              className="social-icon w-[6.4vw] h-auto mb-[8vw] 
            min-[768px]:w-[3.13vw] min-[768px]:mb-0 
            min-[1440px]:w-[1.67vw]"
            ></img>
          </a>
          <a
            href="https://linkedin.com/in/darius-molotokas-869ba4315"
            target="_blank"
          >
            <img
              src="../../assets/images/icon-linkedin.svg"
              className="social-icon w-[6.4vw] h-auto mb-[8vw] 
            min-[768px]:w-[3.13vw] min-[768px]:mb-0 
            min-[1440px]:w-[1.67vw]"
            ></img>
          </a>
        </div>
      </div>
    </>
  );
}

export default NavBar;
