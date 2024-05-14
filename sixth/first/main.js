// const {sum,divide}=require('./index.js')
// console.log(sum(10,20))
// divide(10,5);

const http = require("http");
const port = 3003;

var server = http.createServer((req, res) => {
  res.write("Hello World! I have created my first server!");
  res.end();
});

server.listen(port, () => {
  console.log(`Server running on port number ${port} successfully..`);
});