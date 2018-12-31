import React from 'react';
import {renderToString} from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../client/Routes'
// import Home from '../client/components/Home';

export default (req) => {
    //renderToString took the Home Component and renders it into one line Raw HTML to be able to send to client for fast load
    //Node env has no idea what JSX is
    const content = renderToString(<StaticRouter location={req.path} context={{}}><Routes /></StaticRouter>)

    return `
        <html>
            <head></head>
            <body>
                <div id="root">${content}</div>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;
}