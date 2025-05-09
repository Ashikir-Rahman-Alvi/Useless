const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8000;

const server = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/index.html') {
        const filePath = path.join(__dirname, 'index.html');

        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, {
                    'Content-Type': 'text/plain'
                });
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, {
                    'Content-Type': 'text/html'
                });
                res.end(data);
            }
        });
    } else if (req.url === '/home') {
        const filePath = path.join(__dirname, 'home.html');

        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, {
                    'Content-Type': 'text/plain'
                });
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, {
                    'Content-Type': 'text/html'
                });
                res.end(data);
            }
        });
    } else if (req.url === '/alvi') {
        const filePath = path.join(__dirname, 'alvi.html');

        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, {
                    'Content-Type': 'text/plain'
                });
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, {
                    'Content-Type': 'text/html'
                });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/plain'
        });
        res.end('404 Not Found <br> 😒');
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
