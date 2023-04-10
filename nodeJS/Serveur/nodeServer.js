const http = require("http");
const fs = require("fs");

const server = http.createServer(
    (Requeste, Response)=>{
        let fichier = "";
        console.log("Server created successfully.");
        Response.setHeader('Content-Type', 'text/html;charset=utf8');
        if ((Requeste.url=== "/" || Requeste.url === "/home") && Requeste.method === "GET") {
            // Response.write("<p>Vous êtes sur la home page.</p>")
            fichier = "./html/index.html"
        } else if (Requeste.url === "/contact" && Requeste.method === "GET") {
            // Response.write("<p>Vous êtes sur la page contact.</p>")
            fichier = "./html/contact.html"
        } else if (Requeste.url === "/profil"  && Requeste.method === "GET") {
            // Response.write("<p>Vous êtes sur la page profil.</p>")
            fichier = "./html/profil.html"
        } else if (Requeste.url === "/product"  && Requeste.method === "GET") {
            // Response.write("<p>Vous êtes sur la page produit.</p>")
            fichier = "./html/product.html"
        } else {
            // Response.write("<p>Error 404, page not found.</p>")
            fichier = "./html/404.html"
        }
        fs.readFile(fichier, (Error, Data)=>{
            if (Error){
                console.error(Error);
                Response.end();
            } else {
                // console.log(Data.toString());
                Response.write(Data);
                Response.end();
            }
        })
    }
)
server.listen(6969, "localhost", ()=>{
    console.log("server listening on port 6969");
})