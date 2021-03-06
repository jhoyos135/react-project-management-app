import React, { Component } from 'react';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Projects extends Component  {
    render() {
        
        const { projects, auth } = this.props;
        if(!auth.uid) return <Redirect to='/signin' />


        return (

                <div className="dashboard container">

                    <h4 className="center card pink white-text">Projects</h4>

                    <div className="row">
                        <div className=" col s12">

                <ProjectList projects= {projects} />

                        </div>

                    </div>
                </div>

        )
    }
}

const mapStateToProps = (state) => {

    return {

        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth
    
    }

}

export default compose(

    connect(mapStateToProps),
    firestoreConnect([

        { collection: 'projects' }

    ])

)(Projects)