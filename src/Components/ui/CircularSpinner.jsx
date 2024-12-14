import React from "react";
const CircularSpinner = ({ size = 50, color = "blue" }) => {
  const spinnerStyle = {
    width: `${size}px`,
    height: `${size}px`,
    border: `5px solid rgba(255, 255, 255, 0.3)`,
    borderTop: `5px solid ${color}`,
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  };

  return <div style={spinnerStyle} className="spinner"></div>;
};

const styles = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

// Inject the styles into the DOM
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default CircularSpinner