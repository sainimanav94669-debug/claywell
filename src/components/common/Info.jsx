const Info = ({ children, className = "" }) => {
    
  return (
    <h2
      className={`    text-13 leading-118 font-medium uppercase  text-orange-100   ${className}`}>
      {children}
    </h2>
  );
};

export default Info
