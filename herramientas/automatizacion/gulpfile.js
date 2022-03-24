const gulp = require("gulp")
const word = "hello"

gulp.task("build", (cb)=>{
    console.log("building site");
    setTimeout(cb, 1200)
})


word.pipe(()=>{
    
})