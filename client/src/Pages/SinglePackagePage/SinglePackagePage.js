import React from "react";
import { request } from "../../api/request";
import envVariables from "../../envVariables";
import Loading from "../../common/atoms/Loading";
import { Link } from "react-router-dom";
import DependencyList from "../../common/molecules/DependencyList";

const SinglePackagePage = (props) => {
  const { packageId } = props;

  const [debianPackage, setDebianPackage] = React.useState([]);

  React.useEffect(() => {
    async function fetch() {
      const result = await request(envVariables.PACKAGES_ENDPOINT + packageId);

      setDebianPackage(result);
    }
    fetch();
  }, [packageId]);

  return (
    <div>
      {debianPackage.Package !== undefined ? (
        <div>
          <Link to={"/packages"}>Package oveview</Link>
          <h1>{debianPackage.Package}</h1>
          <p>{debianPackage.DesciptionSummary}</p>
          <h2>Description</h2>

          <p>{debianPackage.Description}</p>

          <h2>Dependencies</h2>
          <DependencyList
            title="Package Dependencies"
            dependencies={debianPackage.Dependencies.PackageDependencies}
            missingDependenciesMessage={
              debianPackage.Package + " has no package dependencies"
            }
          />

          <DependencyList
            title="Reverse Dependencies"
            dependencies={debianPackage.Dependencies.ReverseDependencies}
            missingDependenciesMessage={
              debianPackage.Package + " has no reverse dependencies"
            }
          />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default SinglePackagePage;
