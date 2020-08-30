import React from "react";
import ListItemLink from "../atoms/ListItem";

const DependencyList = (props) => {
  const { title, dependencies, missingDependenciesMessage } = props;

  const listItems = dependencies.map((dependency, index) => (
    <ListItemLink
      key={dependency.Dependency + "-" + index}
      text={dependency.Dependency}
      link={dependency.isListed ? "/packages/" + dependency.Dependency : ""}
      isLink={dependency.isListed ? true : false}
    />
  ));
  return (
    <div>
      <h4>{title}</h4>
      {dependencies.length > 0 ? (
        <ul>{listItems}</ul>
      ) : (
        <i>{missingDependenciesMessage}</i>
      )}
    </div>
  );
};

export default DependencyList;
