import PropTypes from "prop-types";
import { Vector } from "../../assets/svgs";
import "./icon.css";

export const IconType = {
  vector: "vector",
};

export const Icon = ({ type, colour, size, onClick }) => {
  const translate = `scale(${size / 24})`;

  const getIconType = () => {
    switch (type) {
      case IconType.vector:
        return (
          <Vector
            fill={colour}
            transform={translate}
            onClick={onClick}
            className="clickable"
          />
        );
      default:
        return <></>;
    }
  };

  return getIconType();
};

Icon.propTypes = {
  /**
   * Accordion contents (Array of values consisting of object {title: string, author: string, content: string[]})
   */
  type: PropTypes.oneOf(Object.keys(IconType)),
  /**
   * What color to use
   */
  colour: PropTypes.string,
  /**
   * Size of svg
   */
  size: PropTypes.number,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Icon.defaultProps = {
  colour: null,
  size: 24,
};
