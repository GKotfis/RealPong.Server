
import { Request, Response, Application } from 'express';
import express = require('express');
import * as path from 'path'

const app: Application = express();
app.set("port", process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, "public"), { maxAge: 31557600000 }));
// app.use('src', express.static(path.join(__dirname, "public", "src"), { maxAge: 31557600000 }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(8080);

const server = app.listen(app.get("port"), () => {
    console.log(
        "  App is running at http://localhost:%d in %s mode",
        app.get("port"),
        app.get("env")
    );
    console.log("  Press CTRL-C to stop\n");
});

export default server;