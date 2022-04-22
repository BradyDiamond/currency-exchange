export class ApiCall {
  static getCurrency() {
    return fetch(url)
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function (error) {
        return error;
      });
  }
}