const http = require('http');
const port = 1234;

// Simple server that accepts requests on port 1234 and
// responds with the word "hi"
const server = http.createServer((req, res) => {

    res.write('hi');
    res.end();
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
});