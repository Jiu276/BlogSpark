import http from 'http';
import fs from 'fs';

const port = 8080;

const server = http.createServer((req, res) => {
  console.log(`Request: ${req.method} ${req.url}`);
  
  if (req.url === '/' || req.url === '/index.html') {
    fs.readFile('./index.html', 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Error loading index.html: ' + err.message);
        return;
      }
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    });
  } else if (req.url.startsWith('/assets/')) {
    const filePath = '.' + req.url;
    const ext = req.url.split('.').pop();
    const contentType = ext === 'css' ? 'text/css' : 'application/javascript';
    
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('File not found: ' + filePath);
        return;
      }
      res.writeHead(200, {'Content-Type': contentType});
      res.end(data);
    });
  } else {
    // SPA fallback
    fs.readFile('./index.html', 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Error loading index.html');
        return;
      }
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    });
  }
});

server.listen(port, 'localhost', () => {
  console.log(`✅ Simple server running at http://localhost:${port}`);
  console.log(`📂 Current directory: ${process.cwd()}`);
  console.log(`🔍 Files available:`);
  console.log(`   - http://localhost:${port}/ (index.html)`);
  console.log(`   - http://localhost:${port}/assets/ (CSS & JS)`);
}).on('error', (err) => {
  console.error('Server error:', err);
});