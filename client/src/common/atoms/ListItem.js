import React from "react";
import { Link } from "react-router-dom";

const ListItemLink = (props) => {
  const { text, link, isLink } = props;
  return (
    <li key={text + "-" + Math.floor(Math.random() * 10000)}>
      {isLink ? <Link to={link}>{text}</Link> : text}
    </li>
  );
};

export default ListItemLink;
