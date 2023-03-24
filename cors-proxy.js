const http = require('http');

// Proxy server that sends requests to different origin server
const server = http.createServer((proxyReq, proxyRes) => {

    // Send request to origin-b server.
    http.get('http://localhost:1234', res => {

        let rawData = '';
    
        // Add data to the overall data string
        res.on('data', chunk => {
            rawData += chunk;
        });

        // No more data send to client
        res.on('end', () => {
            // Set header to allow request from browser
            proxyRes.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
            proxyRes.write(rawData);
            proxyRes.end();
        });
    
        res.on('error', err => {
            console.log(err);
        });
    
    });

});

server.listen(1235, () => {
    console.log(`Proxy server listening on port 1235...`);
});