import React from "react";
import Loading from "../../common/Loading";
import { request } from "../../api/request";
import envVariables from "../../envVariables";

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
      <h1>{debianPackage.Package}</h1>
      <h2>Description</h2>
      <p>{debianPackage.Description}</p>
      <h2>Dependencies</h2>
      {debianPackage.Depends !== undefined || debianPackage.Depends !== "" ? (
        <p>{debianPackage.Package + " depends on " + debianPackage.Depends}</p>
      ) : (
        <p>{debianPackage.Package + " has no dependencies"}</p>
      )}
    </div>
  );
};

export default SinglePackagePage;
