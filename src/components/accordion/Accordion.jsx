import React from "react";
import PropTypes from "prop-types";
import "./accordion.css";
import { Icon, IconType } from "../icons/Icon";
import { Helper } from "../../utils/helpers";
import { ColourConfigurations } from "../../constants";

/**
 * Primary UI component for user interaction
 */
export const Accordion = ({ accordionList, className, id }) => {
  const accordionToggle = (e) => {
    const selected = document.getElementById(e);
    const panel = selected.nextElementSibling;

    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";

      for (let i = 0; i < accordionList.length; i++) {
        if (`${id}${i + 1}` !== e) {
          const others = document.getElementById(`${id}${i + 1}`);
          const otherPanels = others.nextElementSibling;

          otherPanels.style.display = "none";
        }
      }
    }
  };

  return (
    <>
      {accordionList?.map((element, index) => (
        <div key={`${id}${index + 1}`}>
          <button
            className={["accordion", "accordion-grid", className].join(" ")}
            id={`${id}${index + 1}`}
          >
            <div>
              <h1>{index + 1}</h1>
            </div>
            <div className="accordion-title">
              <h1>{element?.name}</h1>
            </div>
            <div className="accordion-svg">
              {" "}
              <Icon
                type={IconType.vector}
                colour={Helper.getConstantColour(
                  ColourConfigurations.secondary
                )}
                className="book-toggle"
                onClick={() => accordionToggle(`${id}${index + 1}`)}
              />{" "}
            </div>
            <div className="accordion-author">
              <p>by {element?.author}</p>
            </div>
          </button>
          <div className="panel">
            {element?.borrower?.map((e, index) => (
              <div className="customer" key={`${id}customer-${index + 1}`}>
                <h2>{e}</h2>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

Accordion.propTypes = {
  /**
   * Accordion contents (Array of values consisting of object {name: string, author: string, borrower: string[]})
   */
  accordionList: PropTypes.array.isRequired,
  /**
   * Optional className if additional styling is required
   */
  className: PropTypes.string,
  /**
   * Button id
   */
  id: PropTypes.string.isRequired,
};

Accordion.defaultProps = {
  accordionList: [],
};
