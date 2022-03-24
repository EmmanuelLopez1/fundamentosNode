const puppeteer = require("puppeteer");

(async ()=>{
    console.log("lanzando navegador");
    const browser =  await puppeteer.launch({headless:false})

    const page = await browser.newPage()
    await page.goto("https://en.wikipedia.org/wiki/Node.js")

    const title  =await page.evaluate(()=>{
        const h1 = document.querySelector("h1")
        console.log(h1.innerHTML);
        return h1.innerHTML
    })

    console.log(title);

    browser.close()  
    console.log("cerrarndo navegador");
})()