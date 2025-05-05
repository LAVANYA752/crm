const Icon = ({ name, width , height, className = '' }) => (
    <svg width={width } height={height} className={className} aria-hidden="true">
      <use xlinkHref={`#icon-${name}`} />
    </svg>
  );
  
export default Icon;