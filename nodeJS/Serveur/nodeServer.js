const http = require("http");
const server = http.createServer(
    (Requeste, Response)=>{
        console.log("Server created successfully.");
        Response.setHeader('Content-Type', 'text/html;charset=utf8');
        if ((Requeste.url=== "/" || Requeste.url === "/home") && Requeste.method === "GET") {
            Response.write("<p>Vous êtes sur la home page.</p>")
        } else if (Requeste.url === "/contact" && Requeste.method === "GET") {
            Response.write("<p>Vous êtes sur la page contact.</p>")
        } else if (Requeste.url === "/profil"  && Requeste.method === "GET") {
            Response.write("<p>Vous êtes sur la page profil.</p>")
        } else {
            Response.write("<p>Error 404, page not found.</p>")
        }
        Response.end
}
)
server.listen(6969, "localhost", ()=>{
    console.log("server listening on port 6969");
})

