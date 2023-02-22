const fs = require('fs');
const http = require('http');

const express = require('express');

const app = express();

const path = require('path');
const publicpath = path.join(__dirname ,'public');

app.set('view engine','ejs');
// http.createServer(function (req, resp){
//     resp.writeHead(200 ,{'content-Type' :'text/html'})
//     resp.write('kya be halwa h kya');
//     resp.end();
// }).listen(3000)

// app.use(express.static(publicpath));


app.get('/', (req, resp) => {
        // resp.writeHead(200 ,{'content-Type' :'text/html'})
        // resp.send(`kya hal hai bhai ${req.query.name} ${publicpath} `);
        resp.sendFile(`${publicpath}/index.html`);
        // resp.end();
})

app.get('/about', (req, resp) => {
        // resp.writeHead(200 ,{'content-Type' :'text/html'})
        // resp.send(`
        // <input type="text" value ="${req.query.name}">
        // <button>click me</button>
        // `);
        resp.sendFile(`${publicpath}/about.html`);
        // resp.end();
    })

    app.get('/profile', (req, resp) => {
        // resp.writeHead(200 ,{'content-Type' :'text/html'})
        // resp.send('No page found!');
        // resp.end();
        const user = {name:"salman",
    city:"delhi"}
        resp.render('profile',{user});
    }) 

app.get('*', (req, resp) => {
    // resp.writeHead(200 ,{'content-Type' :'text/html'})
    // resp.send('No page found!');
    // resp.end();
    resp.sendFile(`${publicpath}/error.html`);
})


// ####??// ejs



app.listen(8080);
