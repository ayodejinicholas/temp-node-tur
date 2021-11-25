const http = require('http')
const server = http.createServer((req, res)=>{
if(req.url === '/'){
        res.end('Welcome to our home page ')}
if (req.url === '/about'){
        res.end('Here is our quick history')
    }
res.end(`<h1>Ooops</h1>
<p>What you search for isnt here</p>
<a href="/">Click here</a>
`)
        
})

server.listen(5000,
    console.log('Server is running...s')
)


