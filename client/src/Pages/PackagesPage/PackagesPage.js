import React from "react";
import Loading from "../../common/atoms/Loading";
import { request } from "../../api/request";
import envVariables from "../../envVariables";
import ListItemLink from "../../common/atoms/ListItemLink";

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
        packages.map((item, index) => {
          return (
            <ListItemLink
              key={item.Package + "-" + index}
              text={item.Package}
              link={"/packages/" + item.Package}
              isLink={true}
            />
          );
        })
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default PackagesPage;
