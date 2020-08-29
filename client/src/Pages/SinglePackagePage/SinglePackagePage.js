import React from "react";
import { request } from "../../api/request";
import envVariables from "../../envVariables";
import Loading from "../../common/atoms/Loading";
import ListItemLink from "../../common/atoms/ListItemLink";

const SinglePackagePage = (props) => {
  const { packageId } = props;

  const [debianPackage, setDebianPackage] = React.useState([]);

  React.useEffect(() => {
    async function fetch() {
      const result = await request(envVariables.PACKAGES_ENDPOINT + packageId);
      setDebianPackage(result);
    }
    fetch();
  }, []);

  return (
    <div>
      {debianPackage.Package !== undefined ? (
        <div>
          <h1>{debianPackage.Package}</h1>
          <h2>Description</h2>
          <p>{debianPackage.Description}</p>
          <h2>Dependencies</h2>

          {debianPackage.Depends !== undefined ||
          debianPackage.Depends !== "" ? (
            <div>
              <p>Package Dependencies</p>
              {debianPackage.Dependencies.PackageDependencies.map(
                (dependency) => {
                  return (
                    <ListItemLink
                      text={dependency}
                      link={"/packages/" + dependency}
                    />
                  );
                }
              )}
            </div>
          ) : (
            <p>{debianPackage.Package + " has no dependencies"}</p>
          )}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default SinglePackagePage;
