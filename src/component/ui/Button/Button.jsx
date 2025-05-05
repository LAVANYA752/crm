import React from 'react';
import './Button.css'; // Import external CSS

const Button = ({
  children,
  type = 'button',
  onClick,
  variant = 'filled',  // 'filled' or 'outline'
  color = 'primary',   // 'primary' or 'secondary'
  size = 'md',         // 'sm', 'md', 'lg'
  fullWidth = false,
}) => {
  const sizeClass = `button-${size}`; 
  const variantClass = `button-${color}-${variant}`; 
  const fullWidthClass = fullWidth ? 'button-full-width' : '';

  const classNames = `button ${sizeClass} ${variantClass} ${fullWidthClass}`.trim();

  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames}
    >
      {children}
    </button>
  );
};

export default Button;
