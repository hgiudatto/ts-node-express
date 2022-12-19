"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv = require("dotenv");
dotenv.config();
let app = undefined;
app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: true }));
const port = process.env.port;
console.log(`port: ${port}`);
app.get("/ping", (_req, res) => {
    console.log("someone pinged here!!");
    res.status(200).send("pong");
});
// Add 404 handler
app.use((_req, _res) => {
    _res.status(404).send("Not found");
});
// Start server (http.createServer can also be used)
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
/* http.createServer(port, () => {
  console.log(`Running at http://localhost:${port}/`);
}); */
