import React from "react";
import { Link } from "react-router-dom";

const ListItemLink = (props) => {
  const { text, link } = props;
  return (
    <li key={text + "-" + Math.floor(Math.random() * 10000)}>
      <Link to={link}>{text}</Link>
    </li>
  );
};

export default ListItemLink;
