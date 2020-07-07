import React, { Component } from 'react'
import { connect } from 'react-redux'
import {createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'

class CreateProject extends Component {
 constructor(props) {
     super(props)
 
     this.state = {
            title : '',
            content : ''
     }
 }
 
 handleChange = (e) => {
     console.log(e)
     this.setState({
         [e.target.id] : e.target.value
     })
 }

 handleSubmit = (e) => {
    // console.log(e)
    e.preventDefault();
    // console.log(this.state)
    this.props.createProject(this.state)
}


    render() {
        const { auth } = this.props;
        if(!auth.uid) return <Redirect to='/signin' />
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create Project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                        <textarea name="content" id="content" onChange={this.handleChange} className="materialize-textarea" />
                    </div>
                    <div className="input-field">
                      <button className="btn pink lighten-1 z-depth-0">create</button>
                    </div>
                </form>
                
            </div>
        )
    }
}


const mapStateToProps = (state) => {
         return {
             auth : state.firebase.auth
         }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject : (project)=> dispatch(createProject(project))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateProject)