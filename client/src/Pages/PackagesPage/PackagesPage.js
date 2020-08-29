import React from "react";
import Loading from "../../common/Loading";
import { request } from "../../api/request";
import envVariables from "../../envVariables";

const PackagesPage = () => {
  const [packages, setPackages] = React.useState([]);

  React.useEffect(() => {
    async function fetch() {
      const result = await request(envVariables.PACKAGES_ENDPOINT);
      setPackages(result);
    }
    fetch();
  }, []);

  return (
    <div>
      {packages.length > 0 ? (
        packages.map((p) => {
          return (
            <li key={p.Package}>
              <a href={"/packages/" + p.Package}>{p.Package}</a>
            </li>
          );
        })
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default PackagesPage;
