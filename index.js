const jwksClient = require('jwks-rsa')
const axios = require('axios');

const client = jwksClient({
    jwksUri: 'http://localhost:8080/realms/nimity/protocol/openid-connect/certs'
});

(async () => {
    const response = await axios.get('http://localhost:8080/realms/nimity/protocol/openid-connect/certs');

    console.log(response.status);
    console.log(response.data);
    // const keys = await client.getSigningKeys();
    // console.log(keys);
})()

