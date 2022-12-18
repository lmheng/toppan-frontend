import React from "react";
import PropTypes from "prop-types";
import "./button.css";

/**
 * Primary UI component for user interaction
 */
export const Button = ({ backgroundColor, label, id, className, ...props }) => {
  return (
    <button
      type="button"
      id={id}
      className={["storybook-button", className].join(" ")}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      <h6>{label}</h6>
    </button>
  );
};

Button.propTypes = {
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Button id
   */
  id: PropTypes.string.isRequired,
  /**
   * Optional className if additional styling is required
   */
  className: PropTypes.string,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};
