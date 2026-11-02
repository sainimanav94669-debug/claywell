const Info = ({ children, className = "" }) => {
    
  return (
    <h2
      className={`    text-[13px] leading-[118%] font-medium uppercase  text-[#C2603A]   ${className}`}>
      {children}
    </h2>
  );
};

export default Info
