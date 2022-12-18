import React from "react";
import PropTypes from "prop-types";
import "./error.css";

/**
 * Primary UI component for user interaction
 */
export const Error = ({ errorMsg, id, className }) => {
  return (
    <div id={id} className={["error-boundary", className].join(" ")}>
      <h6>{errorMsg}</h6>
    </div>
  );
};

Error.propTypes = {
  /**
   * What background color to use
   */
  errorMsg: PropTypes.string.isRequired,
  /**
   * Button id
   */
  id: PropTypes.string.isRequired,
  /**
   * Optional className if additional styling is required
   */
  className: PropTypes.string,
};

Error.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};
