const http = require("http");
const fs = require("fs");

// Create a local server to receive data from
/**
 * req - Request which is coming from the client
 * res - Response that we are sending to client
 */
const PORT = 5000;
http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(`
            <html>
                <head>
                    <title>Home</title>
                </head>
                <body>
                    <h1>Welcome to basic node application</h1>
                </body>
            </html>
            `);
    } else if (req.url === "/about") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(`
            <html>
                <head>
                    <title>About Us</title>
                </head>
                <body>
                    <h1>About us page</h1>
                </body>
            </html >
            `);
    } else if (req.url === "/contact") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(`
            <html>
                <head>
                    <title>Contact us</title>
                </head>
                <body>
                    <h1>Contact Us Page</h1>
                </body>
            </html >
            `);
    } else if ("/favicon.ico") {
      const image = fs.readFileSync("./assets/web.png");
      res.writeHead(200, {
        "Content-Type": "image/png",
        "Content-Length": image.length,
      });
      // Send the body of the response
      res.end(image);
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(`
            <html>
                <head>
                    <title>404 Not Found</title>
                </head>
                <body>
                    <h1>404 NOT FOUND</h1>
                </body>
            </html >
            `);
    }
  })
  .listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
  });

// res.writeHead(200, { "Content-Type": "application/json" });
// res.write(`<html>
//                 <head>
//                     <title>Test</title></head>
//                 <body>
//                     <h1>Hello all</h1>
//                 </body>
//             </html >`);
// res.end(
//   JSON.stringify({
//     data: "Hello World!",
//   })
// );
