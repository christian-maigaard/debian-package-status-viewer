import React from "react";
import ListItemLink from "../../common/atoms/ListItemLink";

const DependencyList = (props) => {
  const { title, dependencies, missingDependenciesMessage } = props;
  return (
    <div>
      <h4>{title}</h4>
      {dependencies.length > 0 ? (
        <div>
          {dependencies.map((dependency, index) => {
            return (
              <ListItemLink
                key={dependency.Dependency + "-" + index}
                text={dependency.Dependency}
                link={
                  dependency.isListed
                    ? "/packages/" + dependency.Dependency
                    : ""
                }
                isLink={dependency.isListed ? true : false}
              />
            );
          })}
        </div>
      ) : (
        <i>{missingDependenciesMessage}</i>
      )}
    </div>
  );
};

export default DependencyList;
