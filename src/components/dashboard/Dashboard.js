import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
    
    render() {

        const { projects, auth, notifications } = this.props;
        if(!auth.uid) return <Redirect to='/signin' />

        return (

                <div className="dashboard container">

                    <h4 className="center card pink white-text">Dashboard</h4>

                    <div className="row">
                        <div className=" col s12 m6 custom_projects">

                <ProjectList projects= {projects} />

                        </div>

                        <div className=" col s12 m5 offset-m1">

                <Notifications notifications={notifications} />

                        </div>
                    </div>
                </div>

        )
    }
}

const mapStateToProps = (state) => {

    return {

        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    
    }

}

export default compose(

    connect(mapStateToProps),
    firestoreConnect([

        { collection: 'projects', limit: 3, orderBy: ['createdAt', 'desc']  },
        { collection: 'notifications', limit: 4, orderBy: ['time', 'desc'] }

    ])

)(Dashboard)