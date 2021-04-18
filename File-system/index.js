var fs = require("fs");

var https = require("https");

https.get("https://jsonplaceholder.typicode.com/posts", res => {

    // fs.writeFile(result, post, (err) => {
    //if there is an error, throw an error
    // if (err) throw err;

    //console.log("Success")

    let body = " ";

    res.on("data", data => {
        body += data;
    })

    res.on("end", () => {
        fs.writeFile("./result/posts.json", body, (err) => {
            if (err) throw err
        });
    });

});


//}).listen(5000);