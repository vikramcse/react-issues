import React from "react";
import ReactTestUtils from "react-dom/test-utils";

import Card from "./Card";
// "patrick Jane"
test("Card", () => {
  let item = {
    name: 1,
    role: "Consultant",
    image: "https://upload.wikimedia.org/wikipedia/en/3/37/Patrick_Jane.jpg"
  };
  let index = 1;

  try {
    const component = ReactTestUtils.renderIntoDocument(
      <Card item={item} index={index} />
    );
  } catch (e) {}
});
