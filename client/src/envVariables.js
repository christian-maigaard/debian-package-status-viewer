const PACKAGES_ENDPOINT =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000/api/packages/"
    : "/api/packages/";
export default { PACKAGES_ENDPOINT };
