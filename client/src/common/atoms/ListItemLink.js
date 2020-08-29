import React from "react";

const ListItemLink = (props) => {
  const { text, link } = props;
  return (
    <li key={text + "-" + Math.floor(Math.random() * 10000)}>
      <a href={link}>{text}</a>
    </li>
  );
};

export default ListItemLink;
