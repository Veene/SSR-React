import React from 'react'
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import UsersListPage, { loadData } from './pages/UsersListPage'

//exporting an array of routes for react router config library
export default [
    {
        ...HomePage,
        path: '/',
        exact: true
    },
    {
        ...UsersListPage,
        path: '/users',
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