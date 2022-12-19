import Express from "express";
const dotenv = require("dotenv");

dotenv.config();
let app: Express.Application | undefined = undefined;

app = Express();
app.use(Express.urlencoded({ extended: true }));

const port: string | undefined = process.env.port;
console.log(`port: ${port}`);

app.get("/ping", (_req: Express.Request, res: Express.Response) => {
  console.log(`someone pinged here!! ${new Date().toLocaleDateString()}`);
  res.status(200).send("pong");
});

// Add 404 handler
app.use((_req: Express.Request, _res: Express.Response) => {
  _res.status(404).send("Not found");
});

// Start server (http.createServer can also be used)
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

/* http.createServer(port, () => {
  console.log(`Running at http://localhost:${port}/`);
}); */
