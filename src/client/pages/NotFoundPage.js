import React from 'react';

//staticContext is the name that staticServer automatically gives it instead of the 'context' we added in index.js to renderer
const NotFoundPage = ({ staticContext={} }) => {
    staticContext.notFound = true
    return (
        <h1>Ooops, route not found</h1>
    )
}
export default {
    component: NotFoundPage
}