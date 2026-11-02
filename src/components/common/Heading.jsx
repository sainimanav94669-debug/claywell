const Heading = ({ children, className = "" }) => {
    
  return (
    <h2
      className={`     text-[30px] leading-[112%] font-medium  text-[#2B2622] sm:text-[50px] lg:text-[68px] ${className}`}>
      {children}
    </h2>
  );
};

export default Heading;