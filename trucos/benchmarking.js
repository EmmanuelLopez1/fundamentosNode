const http = require("http")
const server = http.createServer((req, res)=>{
    console.log(req.url);
    console.log("nueva peticion");
    res.write("hello")
    res.end()
})
server.listen(5000)
console.log("listening server");

console.time("todo")
let suma = 0
console.time("bucle")
function baby() {
    for (let i = 0; i < 10; i++) {
        suma+= 1
    }
    console.log("la funcion ha terminado");
}
baby()
console.timeEnd("bucle")
console.timeEnd("todo")

