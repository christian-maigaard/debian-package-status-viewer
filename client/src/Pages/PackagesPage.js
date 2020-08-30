import React from "react";
import Loading from "../common/atoms/Loading";
import { request } from "../api/request";
import envVariables from "../envVariables";
import ListItemLink from "../common/atoms/ListItem";
import "../App.css";

const PackagesPage = () => {
  const [packages, setPackages] = React.useState([]);

  React.useEffect(() => {
    async function fetch() {
      const result = await request(envVariables.PACKAGES_ENDPOINT);
      setPackages(result);
    }
    fetch();
  }, []);

  const listItems = packages.map((item, index) => (
    <ListItemLink
      key={item.Package + "-" + index}
      text={item.Package}
      link={"/packages/" + item.Package}
      isLink={true}
    ></ListItemLink>
  ));

  return (
    <div>
      <h1>Packages</h1>
      {packages.length > 0 ? <ul>{listItems}</ul> : <Loading />}
    </div>
  );
};

export default PackagesPage;
