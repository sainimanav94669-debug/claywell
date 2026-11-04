const Heading = ({ children, className = "" }) => {
    
  return (
    <h2
      className={`     max-[640px]:text-30 leading-112 font-medium  text-dark-warm-charcoal max-[1026px]:text-50 text-68 ${className}`}>
      {children}
    </h2>
  );
};

export default Heading;