let fs = require('fs');
let express = require('express');
let path = require('path')

let server = express();
server.use(express.static(path.join(__dirname, 'public')));

// server.get('/', (req, res) => {
//     res.writeHead(200, {'Content-Type':'text/html'});
//     fs.readFile('index.html', (err,data) => {
//         if(err) {
//             throw err;
//         }

//         res.end(data);
//     });
// });

server.listen(8002);

