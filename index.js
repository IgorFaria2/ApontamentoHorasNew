
import {connection} from "./src/config/connection.js"
import express, { Router } from "express"
import { router } from "./routes/routes.js"
/*const ADDOB = require ("node-adodb");
const fs = require("fs");*/
const app = express()

connection
import path from "path"
import { Console } from "console"
app.set("view engine", "ejs")
app.set("views", path.join(process.cwd(), "./views"));
app.use(express.static(path.join(process.cwd(), "/static")));
app.use(express.json());
app.use(express.static("static/js"));
app.use(express.static("static/img"));
app.use(express.urlencoded({ extended: false }));
app.use("",router);
app.listen(5000)