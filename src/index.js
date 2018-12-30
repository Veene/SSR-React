// const express = require('express')
// const React = require('react');
// const renderToString = require('react-dom/server').renderToString;
// const Home = require('./client/components/Home').default; //NODE STYLE OF IMPORTING
import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import Home from './client/components/Home'

const app = express();

//tells express to treat the public directory as the static directory to be viewed to the outside world
app.use(express.static('public'))
app.get('/', (req,res) => {
    //renderToString took the Home Component and renders it into one line Raw HTML to be able to send to client for fast load
    //Node env has no idea what JSX is
    const content = renderToString(<Home />)

    const html = `
        <html>
            <head></head>
            <body>
                <div id="root">${content}</div>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;

    res.send(html)
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})