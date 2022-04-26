export class ApiCall {
  static getCurrency(url) {
    return fetch(url)
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.error-type);
        }
        return response.json();
      })
      .catch(function (error) {
        return error;
      });
  }
}