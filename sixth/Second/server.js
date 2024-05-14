
const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 3000;
const server = http.createServer((req, res) => {
    // Handle requests
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Internal Server Error');
            } else {
                res.writeHead(200);
                res.end(data);
            }
        });
    } else {
        res.writeHead(404);
        res.end('Page Not Found');
    }
});

server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
});
