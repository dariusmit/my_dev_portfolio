import Button from "./Button";

function HeroSection() {
  const clickContact = () => window.scrollTo(0, document.body.scrollHeight);

  return (
    <>
      <div
        className="flex flex-col items-center mb-[21.33vw] justify-center relative 
      min-[768px]:flex-row-reverse min-[768px]:items-start min-[768px]:mb-[7.81vw] min-[768px]:pl-[4.17vw]
      min-[1440px]:mb-[7.22vw] min-[1440px]:px-[11.46vw] min-[1440px]:items-center"
      >
        <div
          className="mb-[10.67vw] w-4/5 relative z-0 h-auto 
          min-[768px]:mb-0 min-[768px]:w-[51.93vw] min-[768px]:ml-[-14vw] 
          min-[1440px]:ml-[0vw] min-[1440px]:w-3/5"
        >
          <img src="../../assets/images/profile1.png"></img>
        </div>
        <div
          className="
          flex flex-col items-center relative z-99 justify-center  
          min-[768px]:w-[57.94vw] min-[768px]:h-auto min-[768px]:items-start
          min-[1440px]:w-[49.03vw]
          "
        >
          <h1
            className="
          text-[10.67vw] leading-[10.67vw] tracking-[-0.3vw] font-bold text-center mb-[6.4vw]
          min-[768px]:text-[9.38vw] min-[768px]:leading-[9.38vw] min-[768px]:tracking-[-0.27vw] min-[768px]:mb-[7.81vw] min-[768px]:text-left 
          min-[1440px]:text-[6.11vw] min-[1440px]:leading-[6.11vw] min-[1440px]:tracking-[-0.17vw] min-[1440px]:mb-[2.99vw]"
          >
            Sveiki,
            <br />
            Aš <u className="decoration-[#4EE1A0]">Darius Molotokas</u>.
          </h1>
          <p
            className="
          text-[#D9D9D9] text-center text-[4.27vw] leading-[6.93vw] mb-[6.4vw] font-medium
          min-[768px]:text-[2.34vw] min-[768px]:leading-[3.65vw] min-[768px]:mb-[7.81vw] min-[768px]:text-left 
          min-[1440px]:text-[1.25vw] min-[1440px]:leading-[1.94vw] min-[1440px]:mb-[4.58vw]"
          >
            Nuolat besimokantis Front End Web programuotojas gyvenantis Kaune.
          </p>
          <Button label="SUSISIEKTI" action={clickContact} />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
