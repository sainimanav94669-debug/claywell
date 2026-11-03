const Heading = ({ children, className = "" }) => {
    
  return (
    <h2
      className={`     text-30 leading-112 font-medium  text-dark-warm-charcoal sm:text-50 lg:text-68 ${className}`}>
      {children}
    </h2>
  );
};

export default Heading;