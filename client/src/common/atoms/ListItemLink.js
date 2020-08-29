import React from "react";

const ListItemLink = (props) => {
  const { text, link } = props;
  return (
    <li key={text}>
      <a href={link}>{text}</a>
    </li>
  );
};

export default ListItemLink;
