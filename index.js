const jwksClient = require('jwks-rsa')

const client = jwksClient({
    jwksUri: 'http://localhost:8080/realms/nimity/protocol/openid-connect/certs'
});

(async () => {
    const keys = await client.getSigningKeys();
    console.log(keys);
})()

