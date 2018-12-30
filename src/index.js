const express = require('express')
const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const Home = require('./client/components/Home').default;

const app = express();

app.get('/', (req,res) => {
    //renderToString took the Home Component and renders it into one line Raw HTML to be able to send to client for fast load
    //Node env has no idea what JSX is
    const content = renderToString(<Home />)

    res.send(content)
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})