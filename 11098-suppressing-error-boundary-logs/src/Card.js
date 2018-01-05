import React from "react";

const Card = props => {
  const initials = `${props.item.name.split(" ")[0][0]}.${
    props.item.name.split(" ")[1][0]
  }`;
  return (
    <li>
      <img
        src={props.item.image}
        alt={props.item.name}
        height="100"
        width="100"
      />
      <h3>{props.item.name}</h3> ({initials})
      <p>{props.item.role}</p>
    </li>
  );
};

export default Card;
