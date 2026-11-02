const Button = ({ children, className = "", type = "button", onClick, }) => {
    
  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-full border  border-[#2B2622]  bg-white px-6 py-3  sm:px-8 sm:py-4.5 text-base font-medium leading-[109%]  text-[#2B2622] transition duration-200 cursor-pointer active:scale-95  ${className} `} >
      {children}
    </button>
  );
};

export default Button;