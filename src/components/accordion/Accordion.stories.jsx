import React from "react";

import { Accordion } from "./Accordion";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Accordion",
  component: Accordion,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Accordion {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  accordionList: [
    {
      name: "Book Name 1",
      author: "Author1",
      borrower: [
        "First_Name Last_Name",
        "First_Name Last_Name",
        "First_Name Last_Name",
      ],
    },
    {
      name: "Book Name 2",
      author: "Author2",
      borrower: [
        "First_Name Last_Name",
        "First_Name Last_Name",
        "First_Name Last_Name",
      ],
    },
    {
      name: "Book Name 3",
      author: "Author3",
      borrower: [
        "First_Name Last_Name",
        "First_Name Last_Name",
        "First_Name Last_Name",
      ],
    },
  ],
  id: "book-item-",
};
