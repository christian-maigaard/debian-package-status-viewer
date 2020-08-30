export async function request(url) {
  return fetch(url)
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          return response.statusCode;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        return errmess;
      }
    )
    .then((response) => response.json());
}
