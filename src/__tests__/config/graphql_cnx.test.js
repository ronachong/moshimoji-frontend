import config from '../../../kit/config';
import '../../../config/project';

describe("agnostic request to graphql endpoint", () => {
  it("response success", () => {
    var req = new XMLHttpRequest();
    req.responseType = 'json';
    req.open("POST", config.graphQLEndpoint);
    req.setRequestHeader("Content-Type", "application/json");
    req.setRequestHeader("Accept", "application/json");
    req.onload = function () {
      console.log('data returned:', req.response);
      expect(req.response)
    }
    var query = `
    `;
    req.send(JSON.stringify({
      query: query,
      variables: {}
    }))
  })
})
