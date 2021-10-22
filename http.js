const http = require('http');

const server = http.createServer((req, res) => {
    //req :  incomming request
    //res.write('Welcome to Backend crs dev')
    //res.end();
    if(req.url === '/'){
        res.end('Welcome to Backend crs dev')
    }
    else if(req.url === '/about'){
        res.end("Its Node.js and Express full course")
    }else{    
        res.end(`
         <h1> Oups </h1>
         <p> it semms like your request isn't available! </p>
    
         <hr>
         <a href ="/"> Back home</a>
        `)
    }
    
});

server.listen(5000)