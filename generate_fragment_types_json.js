// code to generate json for types
// should be run at build to guarantee that file is available when React code runs
// from http://dev.apollodata.com/react/initialization.html#fragment-matcher

// TODO: determine if running with every app run is equivalent to ^ goal
// I think it's not because if I run this code as a function, it may run when
// the app is executed in the browser. If I only run it at build, it will only
// run on the server when the bundles are being generated. Hopefully it will
// insert the file into the bundle.

const fetch = require('node-fetch');
const fs = require('fs');

//TODO: run config during build instead and get this from that config.
const graphQLEndpoint = 'http://www.moshi-moji.xyz/backend/gql'

console.log("generateFragmentTypesJson running")
fetch(graphQLEndpoint, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    query: `
      {
        __schema {
          types {
            kind
            name
            possibleTypes {
              name
            }
          }
        }
      }
    `,
  }),
})
  .then(result => result.json())
  .then(result => {
    // here we're filtering out any type information unrelated to unions or interfaces
    const filteredData = result.data.__schema.types.filter(
      type => type.possibleTypes !== null,
    );
    result.data.__schema.types = filteredData;
    fs.writeFile('./config/fragmentTypes.json', JSON.stringify(result.data), err => {
      if (err) console.error('Error writing fragmentTypes file', err);
      console.log('Fragment types successfully extracted!');
    });
  });
