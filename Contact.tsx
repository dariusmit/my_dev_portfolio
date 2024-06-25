import Button from "./Button";

function Contact() {
  const clickSendMessage = () =>
    window.open("mailto:dariusm.it12@gmail.com", "_blank");

  return (
    <>
      <div
        className="flex flex-col justify-center items-center text-center bg-[#242424] pt-[16vw] pb-[23.2vw] px-[4.27vw]
      min-[768px]:pt-[7.81vw] min-[768px]:pb-[11.98vw] min-[768px]:px-[3.91vw]
      min-[1440px]:pt-[5.83vw] min-[1440px]:pb-[6.39vw] min-[1440px]:px-[11.46vw]"
      >
        <h1
          className="text-[10.67vw] leading-[10.67vw] font-bold tracking-[-0.3vw] mb-[5.33vw]
        min-[768px]:text-[9.38vw] min-[768px]:leading-[9.38vw] min-[768px]:tracking-[-0.27vw] min-[768px]:mb-[2.6vw]
        min-[1440px]:text-[6.11vw] min-[1440px]:leading-[6.11vw] min-[1440px]:tracking-[-0.17vw] min-[1440px]:mb-[2.5vw]"
        >
          Susisiekti
        </h1>
        <p
          className="text-[4.27vw] leading-[6.93vw] font-medium text-[#D9D9D9] mb-[5.33vw]
        min-[768px]:text-[2.34vw] min-[768px]:leading-[3.65vw] min-[768px]:mb-[2.6vw]
        min-[1440px]:text-[1.25vw] min-[1440px]:leading-[1.94vw] min-[1440px]:mb-[2.5vw]"
        >
          Mielai su jumis pabendraučiau!
        </p>
        <p
          className="text-[4.27vw] leading-[6.93vw] font-medium text-[#D9D9D9] mb-[8.53vw]
        min-[768px]:text-[2.34vw] min-[768px]:leading-[3.65vw] min-[768px]:mb-[4.17vw]
        min-[1440px]:text-[1.25vw] min-[1440px]:leading-[1.94vw] min-[1440px]:mb-[2.5vw]"
        >
          dariusm.it12@gmail.com
        </p>
        <Button label="SIŲSTI EL. LAIŠKĄ" action={clickSendMessage} />
      </div>
      <div className="px-[4.27vw] bg-[#242424] min-[768px]:px-[3.91vw] min-[1440px]:px-[11.46vw]">
        <div className="border-b bg-[#242424]"></div>
      </div>
    </>
  );
}

export default Contact;
