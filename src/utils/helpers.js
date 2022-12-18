const isValid = (data) => {
  return !(data === undefined || data === null);
};

const isValidArray = (data) => {
  const isValidData = isValid(data);
  const isArray = isValidData && data instanceof Array;

  return isArray;
};

const getConstantColour = (colourCode) => {
  const style = getComputedStyle(document.body);
  return style.getPropertyValue(colourCode);
};

export const Helper = {
  isValid,
  isValidArray,
  getConstantColour,
};
