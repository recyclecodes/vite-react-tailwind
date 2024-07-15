import { ButtonProps } from '../../types/constant';

const Button: React.FC<ButtonProps> = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  border,
  width,
  hoverButton,
  fullWidth,
}) => {
  return (
    <button type='submit'
      className={`0 relative min-h-[50px] overflow-hidden border transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-black before:transition-all before:duration-500 flex w-full h-[77px] font-medium justify-center items-center gap-1 px-7 py-4 text-lg leading-none
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor} ${border} ${width} ${hoverButton}`
          : 'bg-black text-black border-white border-4 w-9'
      } ${fullWidth && 'w-full'}`}
    >
      {iconURL && (
        <img src={iconURL} alt="arrow right icon" className="relative z-10 w-5 h-5" />
      )}
      <span className='relative z-10'>{label}</span>
      
    </button>

    // <button
    //   className={`flex w-full md:w-44 h-[77px] font-medium justify-center items-center gap-1 px-7 py-4 text-lg leading-none
    //     ${
    //       backgroundColor
    //         ? `${backgroundColor} ${textColor} ${borderColor} ${border} ${width}`
    //         : 'bg-black text-black border-white border-4 w-9'
    //     } ${fullWidth && 'w-full'}`}
    // >
    //   {iconURL && (
    //     <img src={iconURL} alt="arrow right icon" className="w-5 h-5" />
    //   )}
    //   {label}
    // </button>
  );
};

export default Button;
