import React from 'react';

const Button = ({
  children,
  type = 'button',
  onClick,
  variant = 'filled',  // 'filled' or 'outline'
  color = 'primary',   // 'primary', 'secondary', 'danger'
  size = 'md',         // 'sm', 'md', 'lg'
  fullWidth = false,
}) => {
  const colors = {
    primary: {
      background: 'var(--primary-color)',
      text: 'var(--primary-button-color)',
      border: 'var(--primary-color)',
      hoverBackground: '#FFFFFF',
      hoverText: 'var(--primary-color)',
    },
    secondary: {
      background: 'var(--secondary-color)',
      text: 'var(--text-color)',
      border: 'var(--secondary-color)',
      hoverBackground: '#4B5563',
      hoverText: '#FFFFFF',
    },
  };

  const sizes = {
    sm: {
      padding: '6px 18px',
      fontSize: '14px',
    },
    md: {
      padding: '12px 36px',
      fontSize: '16px',
    },
    lg: {
      padding: '12px 20px',
      fontSize: '18px',
    },
  };

  const currentColor = colors[color] || colors.primary;
  const currentSize = sizes[size] || sizes.md;

  const style = {
    display: 'inline-block',
    width: fullWidth ? '100%' : 'auto',
    backgroundColor: variant === 'filled' ? currentColor.background : 'transparent',
    color: variant === 'filled' ? currentColor.text : currentColor.background,
    border: `1px solid ${currentColor.border}`,
    borderRadius: '5px',
    padding: currentSize.padding,
    fontSize: currentSize.fontSize,
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  const hoverStyle = {
    backgroundColor: currentColor.hoverBackground,
    color: currentColor.hoverText || '#FFFFFF',
  };

  const [hovered, setHovered] = React.useState(false);

  return (
    <button
      type={type}
      onClick={onClick}
      style={{ ...style, ...(hovered ? hoverStyle : {}) }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </button>
  );
};

export default Button;
