let http = require('http')
let users = [
    {id: 4, name: 'fj'},
    {id: 2, name: 'kf'}
]

let server = http.createServer(function(req, res){
    res.setHeader('Access-Control-Allow-Origin', '*')
    if(req.url === '/api/users'){
        res.end(JSON.stringify(users))
    }else{
        res.end('not found')
    }
})
server.listen(3003, () => {
    console.log('后端部署在3003端口')
})