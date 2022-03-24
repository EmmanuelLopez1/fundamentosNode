const fs = require("fs")
const stream = require("stream")
let data = ""
const readableString = fs.createReadStream(__dirname + "/text.txt")
readableString.setEncoding("utf8")
readableString.on("data", (chunk) =>{
    data += chunk
})

// readableString.on("end", () =>{
//     console.log(data.length);
// })

// process.stdout.write("hello baby")

const Transform = stream.Transform;

class Mayus extends Transform {
    constructor(){
        super()
        Transform.call(this)
    }
}

Mayus.prototype._transform = function(chunk, codif, cb){
    chunkMayus = chunk.toString().toUpperCase()
    this.push(chunkMayus)
    cb()
}

let mayus = new Mayus()

readableString
    .pipe(mayus)
    .pipe(process.stdout)