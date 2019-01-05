import React from 'react'
import { Route } from 'react-router-dom';
import App from './App'
import HomePage from './pages/HomePage'
import UsersListPage, { loadData } from './pages/UsersListPage'
import NotFoundPage from './pages/NotFoundPage'

//exporting an array of routes for react router config library
export default [
    {
        //because main object with ...App does not have a path: '/*' tied to it, it will always be rendered, like the background for the site, with searchbar, header etc
        ...App,
        routes: [
            {
                ...HomePage,
                path: '/',
                exact: true
            },
            {
                ...UsersListPage,
                path: '/users',
            },
            {
                ...NotFoundPage,
            }
        ]
    }
]



// () => {
//     return (
//         <div>
//             <Route exact path="/" component={Home} />
//             <Route path="/users" component={UsersList} />
//             <Route path="/hi" component={() => 'hi'} />
//         </div>
//     )
// }