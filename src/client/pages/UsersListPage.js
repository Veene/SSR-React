import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchUsers } from '../actions' //without specifiying the file it will take the index
import { Helmet } from 'react-helmet'

class UsersList extends Component {
    componentDidMount() {
        this.props.fetchUsers()
    }
    renderUsers() {
        return this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>
        })
    }
    head() {
        return (
            <Helmet>
                <title>Users App</title>
                <meta property="og:title" content="Users App" />
            </Helmet>
        )
    }
    render() {
        return (
            <div>
                {this.head()}
                Here's a big list of users:
                <ul>{this.renderUsers()}</ul>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return { users: state.users }
}
function loadData(store) {
    //returns a promise because the action uses async await
    return store.dispatch(fetchUsers())
}


export default {
    loadData,
    component: connect(mapStateToProps, { fetchUsers })(UsersList)
} 