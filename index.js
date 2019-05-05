const https = require('https')
const data = JSON.stringify({
    exemplo: 'valor'
})
const options = {
    hostname: 'requestbin.fullcontact.com',
    port: 443,
    path: '/wc5prmwc',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Lenght': data.length
    }
}

const req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`);
    res.on('data', d => {
        process.stdout.write(d)
    })
})

req.on('error', error => {
    console.log(error);
})

req.end()