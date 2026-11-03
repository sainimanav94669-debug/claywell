const Paragraph = ({ children, className = "" }) => {
    
  return (
    <p
      className={` text-sm sm:text-lg font-normal leading-[167%]   text-dark-brown-900 ${className}`} >
      {children}
    </p>
  );
};

export default Paragraph;