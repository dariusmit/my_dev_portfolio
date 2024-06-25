interface Props {
  label: string;
  action: () => void;
}

function Button(props: Props) {
  return (
    <button
      className="text-white hover:text-[#4EE1A0] border-b-2 pb-[2.67vw] border-[#4EE1A0] font-bold text-[4.27vw] leading-[6.93vw] tracking-[0.61vw] 
      min-[768px]:pb-[1.3vw] min-[768px]:text-[2.08vw] min-[768px]:leading-[3.39vw] min-[768px]:tracking-[0.3vw] 
      min-[1440px]:pb-[0.69vw] min-[1440px]:text-[1.11vw] min-[1440px]:leading-[1.81vw] min-[1440px]:tracking-[0.16vw]"
      onClick={props.action}
    >
      {props.label}
    </button>
  );
}

export default Button;
