const Paragraph = ({ children, className = "" }) => {
    
  return (
    <p
      className={`  text-lg font-normal leading-[167%]   text-[#5A5048] ${className}`} >
      {children}
    </p>
  );
};

export default Paragraph;