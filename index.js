process.title = "MyWebServer"

var args = process.args, port = 7070, webserver = require('./server')

webserver.listen(port, () => console.log("Server started at port " + port))
