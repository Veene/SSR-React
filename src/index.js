// const express = require('express')
// const React = require('react');
// const renderToString = require('react-dom/server').renderToString;
// const Home = require('./client/components/Home').default; //NODE STYLE OF IMPORTING
import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config'
import proxy from 'express-http-proxy'
import Routes from './client/Routes'
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

//first part is if the request url starts with /api send request to SECOND argument, third option inside proxy is special for this course becase of the way stephen set up his api
app.use('/api', proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts) {
        opts.headers['x-forwarded-host'] = 'localhost:300';
        return opts
    }
}))

//tells express to treat the public directory as the static directory to be viewed to the outside world
app.use(express.static('public'))
//this * allows us to use any route which will be given from the Routes file using StaticRouter for server. For Client it uses BrowserRouter.
//Now we mainly only have to focus on The client side routing, because express will load the pages with the static RAW html (FASTER loading before hydrating)
app.get('*', (req, res) => {
    const store = createStore(req);

    //some logic to initalize and load data into the store
    //because it is static Server side it requires the logic first to tell router when to update the server side html
    const promises = matchRoutes(Routes, req.path).map(({ route }) => {
        return route.loadData ? route.loadData(store) : null;
    })
    Promise.all(promises).then(() => {
        res.send(renderer(req, store));
    })
    //this is now only going to be called when all promises are completed (before it was used to render the raw HTML and then hydrate)
    // res.send(renderer(req, store));
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})