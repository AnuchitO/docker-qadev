const http = require("http");

const request = (host, port, path, method, payload) => new Promise((resolve, reject) => {
    var load = JSON.stringify(payload);
    var options = {
        host, port, path, method,
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(load)
        }
    };

    let r = {};

    const httpreq = http.request(options, function (res) {
        res.setEncoding('utf8');
        let body = '';
        res.on('data', (chunk) => (body += chunk.toString()));
        res.on('error', reject);
        res.on('end', function () {
            if (res.statusCode >= 200 && res.statusCode <= 299) {
                resolve({ statusCode: res.statusCode, headers: res.headers, body: JSON.parse(body) });
            } else {
                reject({ error: 'Request failed. status: ' + res.statusCode + ', body: ' + body });
            }
        })
    });
    httpreq.write(load);
    httpreq.end();
})

module.exports = request